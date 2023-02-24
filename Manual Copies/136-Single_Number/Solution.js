/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result;
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    for (var key in hash) {
        if (hash[key] === 1) {
            result = key;
        }
    }
    return result;
};