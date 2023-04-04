/*
119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: (See "Pascal's Triangle Example.png" more details.)

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]

Constraints:

0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

/*
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
  if (rowIndex == 0) {
    return [1];
  }

  let triangle = [[1]];
  for (var i = 1; i <= rowIndex; i++) {
      let prevRowLength = triangle[i - 1].length;
      let currentRow = [];
      for (var j = 0; j < prevRowLength + 1; j++) {
          currentRow.push((triangle[i-1][j-1] || 0) + (triangle[i-1][j] || 0));
      }
      triangle.push(currentRow);
  }
  return triangle[rowIndex];
};