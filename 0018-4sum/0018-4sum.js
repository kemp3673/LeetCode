/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return [];
    };
    let res = {};
    nums = nums.sort((a,b) => {
        return a-b;
    })
    for (var i = 0; i < nums.length - 3; i++) {
        for (var k = nums.length - 1; k > i+2; k--) {
          let leftPointer = i+1;
        let rightPointer = k-1;
        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer] + nums[k];
            if ( sum === target) {
                let array = [nums[i], nums[leftPointer], nums[rightPointer], nums[k]];
                res[array] = true;
                leftPointer++;
            } else if (sum < target) {
                leftPointer++;
            } else if (sum > target) {
                rightPointer--;
            }  
        }
        
        }
    }
    let test = [];
    Object.keys(res).forEach(answer => {
        test.push(answer.split(','));
    })
    return test;
};