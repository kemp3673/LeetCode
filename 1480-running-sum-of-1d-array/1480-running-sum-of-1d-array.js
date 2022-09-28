/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumArray = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        sumArray.push(nums[i] + sumArray[sumArray.length - 1]);
    }
    return sumArray;
};