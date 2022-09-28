/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = 0; 
    let leftSum = 0;
      
    for (var i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    
    for (var k = 0; k < nums.length; k++) {
        if (leftSum === totalSum - leftSum - nums[k]) {
            return k;
        } 
        leftSum += nums[k];
    }
    return -1;      
};