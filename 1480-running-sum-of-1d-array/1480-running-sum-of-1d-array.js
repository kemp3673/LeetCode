/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumArray = [];
    let currentSum = 0;
    nums.forEach(number => {
        currentSum = currentSum + number;
        sumArray.push(currentSum);
    });
    return sumArray;
};