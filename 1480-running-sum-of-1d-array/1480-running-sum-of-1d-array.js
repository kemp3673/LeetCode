/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumResult = [];
    sumResult.push(nums[0])
    for (var i = 1; i < nums.length; i++) {
        sumResult.push(sumResult[i-1] + nums[i])
    }
    return sumResult;
};