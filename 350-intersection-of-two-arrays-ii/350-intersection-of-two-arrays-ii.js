/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let shortest = nums2.slice();
    let longest = nums1;
    if (nums1.length < nums2.length) {
        shortest = nums1.slice();
        longest = nums2;
    } 
    for (var i = 0; i < shortest.length; i++) {
        let foundIndex = longest.indexOf(shortest[i]);
        if (foundIndex >= 0) {
            result.push(shortest[i]);
            longest.splice(foundIndex, 1);
        }
    }
    return result;
};