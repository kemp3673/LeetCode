/*
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/



/*
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
  let newString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // Create two pointers at the beginning and end of the array
  let left = 0;
  let right = newString.length - 1;
  // While the left pointer is less than the right pointer
  while (left < right) {
      // if left and right are not equal
      if (newString[left] !== newString[right]) {
          // return false
          return false;
      }
      // increment left
      left++;
      // decrement right
      right--;
  }
  // return true if the loop completes
  return true;
};

/*
Solution found to not use regex

var isPalindrome = function (s) {
  const factoredStr = s
    .toLowerCase()
    .split("")
    .filter(
      (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
    )
    .join("");

  return factoredStr === factoredStr.split("").reverse().join("");
};

*/