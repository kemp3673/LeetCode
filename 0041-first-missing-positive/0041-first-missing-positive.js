/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let found = 1;
    nums.sort((a,b) => {
        return a-b;
    })
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === found) {
            found++;
        }
    }
    return found;
};