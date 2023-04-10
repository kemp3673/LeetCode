/*
36. Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
*/



/*
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // CHECK ROWS
  let rows = true;
  for (var j = 0; j < board.length; j++) {
      if (!checker(board[j])) rows = false;
  };

  // CHECK COLUMNS
  let columns = true;
  for (var i = 0; i < board.length; i++) {
      let column = [];
      for (var k = 0; k < board.length; k++) {
          column.push(board[k][i]);
      }
      if (!checker(column)) columns = false;
  };

  // CHECK SQUARES
  let squares = true;
  // create an array of the squares
  for (var l = 0; l < board.length; l+=3) {
      for (var m = 0; m < board.length; m+=3) {
          let square = [
              board[l][m], board[l][m+1], board[l][m+2],
              board[l+1][m], board[l+1][m+1], board[l+1][m+2],
              board[l+2][m], board[l+2][m+1], board[l+2][m+2]
              ];
          if (!checker(square)) squares = false;
      };
  };

  // If any are false, return false;
  if (rows && columns && squares) {
      return true;
  } else {
      return false;
  }
};

var checker = function(row) {
  let numbers = {};
  let valid = true;
  row.forEach(entry => {
      if (entry !== ".") {
          if (numbers[entry]) {
              valid = false;
          } else {
              numbers[entry] = 1;
          }
      }
  });
  return valid;
};
