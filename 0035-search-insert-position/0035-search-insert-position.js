/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i = 0; i< nums.length; i++) {
        if (target < nums[0]) {
            return 0;
        } else if (nums[i] === target) {
            return i;
        } else if (nums[i] < target && nums[i+1] > target) {
            return i+1;
        } else if (i === nums.length - 1) {
            return nums.length;
        }
    }
};