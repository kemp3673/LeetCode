/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let rotated = [];
  for (var i = 0; i < matrix.length; i++) {
    rotated.push([]);
  }
  let newColumn = 0;
  let newRow = 0;
  for (var row = matrix.length - 1; row >= 0; row--) {
    for (var index = 0; index < matrix.length; index++) {
      rotated[newRow][newColumn] = matrix[row][index];
      newRow++;
    }
    newRow = 0;
    newColumn++;
  }
  return rotated;
};

let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const solution = rotate(test);
console.table(solution);
let expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
console.table(expected);
