/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i=0; i < nums.length; i++) {
        if (nums.includes(target - nums[i])) {
            if (nums[i] === (target - nums[i])) {
                if (nums.indexOf(target - nums[i], i + 1) !== -1) {
                    return [i, nums.indexOf(target - nums[i], i + 1)]
                }
            } else {
                return [i, nums.indexOf(target - nums[i])]
            }
        }   
    }
};