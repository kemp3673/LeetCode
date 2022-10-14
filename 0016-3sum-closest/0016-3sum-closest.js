/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let difference = Math.pow(10,4);
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for (var i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(difference)) {
                difference = target - sum;
            }
            if (sum < target) {
                left++;
                while (nums[left] === nums[left-1]) {
                    left++;
                } 
            } else {
                right--;
                while (nums[right] === nums[right+1]) {
                    right--;
                }
            }
        }
    }
    return target - difference;
};