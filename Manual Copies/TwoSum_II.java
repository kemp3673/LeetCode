/*
167. Two Sum II - Input array is sorted
Medium

Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]

Constraints:
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
 */

public class TwoSum_II {
  // Inputs - Sorted list of numbers, and a target integer
  // Output - Result array that contains indexes + 1 of the first two numbers
  // where the sum equals the target int
  // Constraints - sorted, array length between 2 & 3 * 10^4, target between -1000
  // & 1000
  // Exceptions - No solution / Empty numbers array: Return empty array as result
  public int[] solution(int[] numbers, int target) {
    // Create new array to hold result
    int[] result = new int[2];
    // Create variable i for lower number
    int i = 0;
    // Create variable k for upper numer
    int k = numbers.length - 1;
    // Initialize a while loop
    while (i < k) {
      // If solution found
      if (numbers[i] + numbers[k] == target) {
        // Store indexes + 1 into result array
        result[0] = i + 1;
        result[1] = k + 1;
        // Exit loop
        break;
        // Otherwise, if sum of both number is greater than target
      } else if (numbers[i] + numbers[k] > target) {
        // We decrement the upper number to make it smaller
        k--;
        // Otherwise, if the sum is less than target
      } else if (numbers[i] + numbers[k] < target) {
        // We increment the lower number to make it larget
        i++;
      }
    }
    // Return result, will return solution if found, or empty array if not
    return result;
  }
}
