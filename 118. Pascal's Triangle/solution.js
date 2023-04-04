/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: (See "Pascal's Triangle Example.png" more details.")

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

*/

/*
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  if (numRows == 0) {
      return [];
  } else if (numRows == 1) {
      return [[1]];
  }

  let triangle = [[1]];
  for (var i = 1; i < numRows; i++) {
      let prevRowLength = triangle[i - 1].length;
      let currentRow = [];
      for (var j = 0; j < prevRowLength + 1; j++) {
          currentRow.push((triangle[i-1][j-1] || 0) + (triangle[i-1][j] || 0));
      }
      triangle.push(currentRow);
  }
  return triangle;
};
