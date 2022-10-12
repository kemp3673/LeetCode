/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let position = 0;
    if (nums.length === 1 && nums[0] === target) {
        return 0;
    }
    while (nums.length > 1) {
        let mid = Math.floor(nums.length / 2);
        if (nums[mid] === target) {
            return position + mid;
        } else if (nums[mid] < target) {
            nums.splice(0, mid);
            position += mid;
        } else {
            nums.splice(mid, nums.length - mid);
            if (nums.length === 1 && nums[0] === target) {
                return position;
            }
        }
    }
    return -1;
};