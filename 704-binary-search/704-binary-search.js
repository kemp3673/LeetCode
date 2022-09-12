/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (target < nums[0] || target > nums[nums.length - 1]) {
        return -1;
    }
    let numsCopy = nums.slice();
    let result = -1;
    var recurse = (array, index) => {
        if (array.length === 1 && array[0] !== target) {
            return;
        }
        let median = Math.floor(array.length/2);
        if (array[median] === target) {
        index = index + median;
        result = index;
        return;
        } else if (target > array[median]) {
            index = index + median;
            recurse(array.splice(median), index);
        } else {
        recurse(array.splice(0, median), index);
        }
    }
    recurse(numsCopy, 0);
    return result;
};