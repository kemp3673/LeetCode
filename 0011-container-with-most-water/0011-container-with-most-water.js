/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let waterMax = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    
    while (leftPointer < rightPointer) {
        let min = Math.min(height[leftPointer], height[rightPointer]);
        let currentWater = min * (rightPointer - leftPointer);
        if (waterMax < currentWater) {
            waterMax = currentWater;
        };
        if (height[leftPointer] >= height[rightPointer]) {
            rightPointer--;
        } else {
            leftPointer++; 
        }
    }
    
    return waterMax;
};

// for (var i = 0; i < height.length - 1; i++) {
//         for (var j = i + 1; j < height.length; j++) {
//             let minHeight = Math.min(height[i], height[j]);
//             let currentCapacity = minHeight * (j-i);
//             if (currentCapacity > waterMax) {
//                 waterMax = currentCapacity;
//             }
//         } 
//     }