/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length -1; i++) {
        let k = nums.length - 1;
        while (k > i) {
            if (nums[i] + nums[k] === target) {
                return [i, k];
            }
            k--;
        }
    } 
};