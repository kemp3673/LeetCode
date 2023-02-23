/*
  69 Sqrt(x)

  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Handling edge cases
  if (x < 2) {
    return x;
  }
  let upper = x;
  let lower = 0;
  let answer = 0;

  while (lower <= upper) {
    let middle = Number(((upper - lower) / 2 + lower).toFixed(0));
    let midSq = middle * middle;

    if (midSq === x) {
      return middle;
    } else if (midSq < x) {
      lower = middle + 1;
      answer = middle;
    } else if (midSq > x) {
      upper = middle - 1;
    }
  }
  return answer;
};
