/*
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/



/*
 * @param {string} a
 * @param {string} b
 * @return {string}

    0 + 0 = 0
    0 + 1 = 1
    1 + 0 = 1
    1 + 1 = 10 (which is 0 carry 1)
 */
    var addBinary = function(a, b) {
      // Longest length to use for while loop
      let maxLength = Math.max(a.length, b.length);
      // Store result
      let result = [];
      // Carry Over
      let carry = 0;
      // Current Index for while loop
      let index = 1;

      while (index <= maxLength) {
          // Get current values for a and b, convert to Numbers
          let value_A = a.length - index >= 0 ? Number(a[a.length - index]): 0;
          let value_B = b.length - index >= 0 ? Number(b[b.length - index]): 0;
          // Add current a and b values, along with carry over value
          const sum = value_A + value_B + carry;
          console.log(value_A, value_B, carry);
          // Modulo the sum to get either 1 or 0
          const modulo_Sum = sum % 2;
          // to determine carry Over, divide sum by 2, since 1+1 = 2 and would equest to a carry over of 1. Math.floor will round to 0 otherwise.
          carry = Math.floor(sum / 2);
          // place modulated sum into end of array;
          result.unshift(modulo_Sum);
          index++;
      }

      // check if remaing carry over value
      if (carry > 0) {
          result.unshift(carry);
          carry = 0;
      }
      return result.join('');
  };