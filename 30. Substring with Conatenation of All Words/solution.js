/*
30. Substring with Concatenation of All Words
Hard
809
59
Companies
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.



Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
We return an empty array.
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.


Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // Assign result array to hold answer
  let result = [];
  // Assign totalLength var to hold lengths of future subarray
  // Could potentially just do ( words[0] * words.length ) since all words are the same length, but wanted to be careful about that.
  let totalLength = words.reduce((total, word) => (total += word.length), 0);
  // Iterate over s string
  for (var i = 0; i <= s.length - totalLength; i++) {
    // Pass subString and words array to helper function to check if it contains all words
    if (checkIfStringContains(s.slice(i, i + totalLength), words.slice())) {
      // If it does, push index to result array
      result.push(i);
    }
  }
  // Return result array
  return result;
};

function checkIfStringContains(subString, words) {
  // This function will check if the subString contains all words in the words array and return true or false using recursion

  // Base case: if words array is empty, return true because we have found all words
  if (words.length == 0) return true;
  // Iterate over words array to check if subString contains the word at index j
  for (let j = 0; j < words.length; j++) {
    // Store length of word at index j to be used to slice subString
    let wordLength = words[j].length;
    // Check subString contains word at index j at the beginning of the subString (slice from 0 to wordLength)
    if (subString.slice(0, wordLength) === words[j]) {
      // If it does, remove word from words array
      words.splice(j, 1);
      // Return the result of calling this function again with the new subString and words array
      return checkIfStringContains(subString.slice(wordLength), words);
    }
  }
  // If we have iterated over the entire words array and not found a match, return false
  return false;
}
