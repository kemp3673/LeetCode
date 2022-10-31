/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let row = 0;
    while (row < matrix.length - 1) {
        for (var i = 0; i < matrix[0].length; i++) {
            if (matrix[row+1][i+1] !== undefined) {
                if (matrix[row][i] !== matrix[row+1][i+1]) {
                    return false;
                }
            }
        }
        row++;
    }
    return true;
};