/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tempObj = {};
    for (var i = 0; i<nums.length; i++) {
       if (!tempObj[nums[i]]) {
           tempObj[nums[i]] = 1;
       } else if (tempObj[nums[i]])
           return true;
    }
    return false;
};