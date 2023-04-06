/*
6. ZigZag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

*/


/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // Store converted results in array
  let converted = [];
  // Create empty matrix with n rows
  for (var i = 0; i < numRows; i++) {
      converted.push([]);
  }

  // Index variable of current char.
  let charIndex = 0;
  // Last used row index, used for single coumns starting one from last row.
  let lastRowUsed = numRows-2;

  // Iterate over chars and determine where to put them in matrix
  while (charIndex < s.length) {
      // If current index is modulo of n-1, push next n chars into all arrays
      if (charIndex % (numRows-1) == 0 || charIndex == 0 || numRows - 1 == 0) {
          lastRowUsed = numRows-2;
          for (var j = 0;  j < numRows; j++) {
              if (s[charIndex]) {
                  converted[j].push(s[charIndex]);
              }
              // Increment charIndex
              charIndex++;
          }
      // Otherwise
      } else {
          // Push char into lastRowUsed row
          converted[lastRowUsed].push(s[charIndex]);
          // Increment charIndex
          charIndex++;
          // Decrement lastRow used
          lastRowUsed--;
      }
  }
  // Variable to hold final string
  let answer = '';
  // Method to join chars into final string
  const joinChars = () => {
       // Iterate over each row of matrix
      converted.forEach(row => {
          // Join chars in row into a string and concat to answer string
          answer = answer + row.join('');
      })
  }
  // Invoke helper method
  joinChars();

  // return final answer after joining
  return answer;
};