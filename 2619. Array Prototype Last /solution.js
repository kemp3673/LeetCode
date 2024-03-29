/*
2619. Array Prototype Last
Easy

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Example 1:
Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

Example 2:
Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
*/

Array.prototype.last = function() {
  let last = this[this.length - 1];
  if (last == undefined) {
      last = -1;
  }
  return last;
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/