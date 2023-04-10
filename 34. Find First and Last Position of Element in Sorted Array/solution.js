
/*
34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/





var searchRange = function(nums, target) {
  if (nums.length == 0) return [-1, -1];
  let first = (firstIndex(nums, target));
  if (first == -1) return [-1, -1];
  let last = lastIndex(first, nums, target);
  return [first, last];
};

let firstIndex = function(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] < target) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return array[left] == target ? left : -1;
};

let lastIndex = function (first, array, target){
  let left = first;
  let right = array.length - 1;
  while (left < right) {
      let mid = Math.ceil((left + right) / 2);
      if (array[mid] > target) {
          right = mid - 1;
      } else {
          left = mid;
      }
  }
  return array[left] == target ? left : -1;
}