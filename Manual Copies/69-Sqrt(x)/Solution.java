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



class Solution {
  public int mySqrt(int x) {
      int upper = x;
  int lower = 0;
  int answer = 0;

  if (x < 2) {
    return x;
  }
  while (lower <= upper) {
    int middle = ((upper - lower) / 2) + lower;
    int midSq = x / middle;
    if (midSq == middle) {
      return middle;
    } else if (midSq < middle) {
      upper = middle - 1;
    } else if (midSq > middle) {
      lower = middle + 1;
      answer = middle;
    }
  }
  return answer;
  }
}
