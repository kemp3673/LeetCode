/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = sortAndMerge(nums1, nums2);
    return medianFinder(sorted);
};

var sortAndMerge = function(array1, array2) {
    if (array1.length === 0 && array2.length > 0) {
        array1 = array2;
    } else if (array2.length > 0 && array1.length > 0) {
        array2.forEach(num => {
            for (var i = 0; i < array1.length; i++) {
                if (num < array1[i]) {
                    array1.splice(i, 0, num);
                    break;
                } else if (i === (array1.length - 1)) {
                    array1.push(num);
                    break; 
                }
            }
        })
    }
    return array1;
};

var medianFinder = function(sortedArray) {
    if (sortedArray.length === 0) {
        return 0
    } else if (sortedArray.length === 1) {
        return sortedArray[0];
    }
    
    let midPoint = (sortedArray.length - 1) / 2;
    let upper = Math.ceil(midPoint);
    let lower = Math.floor(midPoint)
    
    if (upper === lower) {
        return sortedArray[midPoint];
    } else {
        let calculateMedian = (sortedArray[lower] + sortedArray[upper]) / 2;
        return (calculateMedian);
    }
}