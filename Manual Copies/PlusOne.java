/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the number 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the number 4321.

Constraints:
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
 */

public class PlusOne {
  public int[] solution(int[] digits) {
    // Iterate over array starting at end
    for (int i = digits.length - 1; i >= 0; i--) {
      // If current number is less than 9
      if (digits[i] < 9) {
        // Increment it +1
        digits[i]++;
        // Return new array value since no numbers are adding to postion left
        return digits;
        // Otherwise, if current digit is 9
      } else {
        // Make current number 0 and move on to next position and repeat
        digits[i] = 0;
      }
    }
    // If iteration exits For loop without expression digits[i] < 9 becoming true at
    // any point
    // That means number at index 0 is also a 9, and entire array needs to increase
    // in legnth
    // Create new array with length 1 larger than array
    int[] newArray = new int[digits.length + 1];
    // Set index 0 to be a 1
    newArray[0] = 1;
    // Iterate over old array
    for (int j = 0; j < digits.length; j++) {
      // set each value to new array at index + 1
      newArray[j + 1] = digits[j];
    }
    // Return new array.
    return newArray;
  }
}
