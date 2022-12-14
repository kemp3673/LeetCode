/*
Given an integer x, return true if x is a palindrome , and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Constraints:
-231 <= x <= 231 - 1
 */

public class Palidrome_Number {
  public boolean isPalindrome(int x) {
    if (x < 0) {
        return false;
    }
    Integer number = x;
    String stringX = number.toString();
    char[] splitX = stringX.toCharArray();
    int index = 0;
    for (int i = splitX.length - 1; i >= index; i--) {
        if (splitX[index] != splitX[i]) {
            return false;
        }
        index++;
    }
    return true;
}
}
