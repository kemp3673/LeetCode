/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let indexResult = -1;
    let leftSum = 0;
    let rightSum = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (leftArray(nums, i) === rightArray(nums, i)) {
            return i;
        }   
    }
    return indexResult;
};

var leftArray = function(nums, index) {
    let leftResult = 0;
    for (var j = 0; j < index; j++) {
        leftResult +=  nums[j];
    }
    return leftResult;
};

var rightArray = function(nums, index) {
    let rightResult = 0;
    for (var k = index + 1; k < nums.length; k++) {
        rightResult +=  nums[k];
    }
    return rightResult;
};