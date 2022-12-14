/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 */


public class LengthOfLastWord {
  public int solution(String s) {
    // Declare new array of strings and give it the value of s split on spaces
    String[] strArray = s.split(" ");
    // Check if array is empty
    if (strArray.length == 0) {
      // If emtpy, return 0
      return 0;
      // Otherwise
    } else {
      // Return the length of the last word in the array
      return strArray[strArray.length - 1].length();
    }
  }
}
