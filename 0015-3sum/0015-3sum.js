/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    
    for (var i = 1; i < nums.length - 1; i ++) {
        let left = 0;
        let right = nums.length - 1; 

        if (result.indexOf([left, nums[i], right]) !== -1) {
            break;
        }
        while (left < i && right > i) {
            let sum = nums[left] + nums[i] + nums[right];
            if (sum > 0) {
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                 left++;
                while (nums[left] === nums[left - 1]) {
                    left++
                }
            } else if (sum === 0) {
                result.push([nums[left], nums[i], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1]) {
                    left++
                }
            }
        }
    }
    console.log(result)
    let unique = new Set(result.map(JSON.stringify));
    return Array.from(unique).map(JSON.parse);
};