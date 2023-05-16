/*
169. Majority Element
Easy
14.7K
446
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counters = {};
  nums.forEach((number) => {
    counters[number] = counters[number] + 1 || 1;
  });

  let result = 0;
  let resultKey;
  let keys = Object.keys(counters);
  keys.forEach((key) => {
    if (counters[key] > result) {
      result = counters[key];
      resultKey = key;
    }
  });
  return resultKey;
};
