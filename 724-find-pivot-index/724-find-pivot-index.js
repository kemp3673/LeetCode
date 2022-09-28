/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
        let leftSum = 0; 
        let rightSum = 0;
        let result = -1;
        const findPivot = (pivot) => {
            pivot = pivot || 0;
            for (var i = 0; i < nums.length; i++) {
                if (i < pivot) {
                    leftSum += nums[i];
                } else if (i > pivot) {
                    rightSum += nums[i];
                }
            }
            if (leftSum === rightSum) {
                    result = pivot;
            } else if (pivot === nums.length - 1) {
                return;
            } else {
                leftSum = 0;
                rightSum = 0;
                pivot++
                findPivot(pivot);
            }
        }
    findPivot();
    return result;
};