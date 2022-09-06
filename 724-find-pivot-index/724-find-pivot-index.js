/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let indexResult = -1;    
    for (var i = 0; i < nums.length; i++) {
        if (leftArray(nums, i) === rightArray(nums, i)) {
            return i;
        }   
    }
    return indexResult;
};

var leftArray = function(nums, index) {
    let leftArray = nums.slice(0, index);
    let leftResult = leftArray.reduce((accum, value) => {
        return accum + value
    }, 0);
    return leftResult;
};

var rightArray = function(nums, index) {
    let rightArray = nums.slice(index + 1);
    let rightResult = rightArray.reduce((accum, value) => {
        return accum + value
    }, 0);
    return rightResult;
};