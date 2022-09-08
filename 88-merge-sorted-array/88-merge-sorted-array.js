/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m);
    nums2.splice(n, nums2.length - n);
    let index1 = 0;
    while (nums2.length > 0) {
        if (nums1[index1] >= nums2[0]) {
            nums1.splice(index1, 0, nums2[0]);
            nums2.shift();
        } else if (nums1[index1] === undefined) {
            nums1.push(nums2[0])
            nums2.shift();
        }
        index1++;
    }
};