/*
  Median of Two Sorted Arrays
  Hard

  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.

  Example 1:
  nums1 = [1, 3]
  nums2 = [2]
  The median is 2.0

  Example 2:
  nums1 = [1, 2]
  nums2 = [3, 4]
  The median is (2 + 3)/2 = 2.5

  Constraints:
  nums1.length == m
  nums2.length == n
  0 <= m <= 1000
  0 <= n <= 1000
  1 <= m + n <= 2000
  -106 <= nums1[i], nums2[i] <= 106


  The time complexity of the given code is O(n + m)
 */


class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
      int totalLength = nums1.length + nums2.length;
      if (totalLength == 0) {
          return 0;
      }
      int[] mergedArrays = new int[totalLength];
      int mergeIndex = 0;
      int index1 = 0;
      int index2 = 0;
      if (nums1.length == 0) {
          mergedArrays = nums2;
      } else if (nums2.length == 0) {
          mergedArrays = nums1;
      } else {
          while (mergeIndex < mergedArrays.length) {
              if (index1 == nums1.length) {
                  mergedArrays[mergeIndex] = nums2[index2];
                  index2++;
              } else if (index2 == nums2.length) {
                  mergedArrays[mergeIndex] = nums1[index1];
                  index1++;
              } else if (nums1[index1] <= nums2[index2]) {
                  mergedArrays[mergeIndex] = nums1[index1];
                  index1++;
              } else {
                  mergedArrays[mergeIndex] = nums2[index2];
                  index2++;
              }
              mergeIndex++;
          }
      }
      if (totalLength % 2 != 0) {
          return mergedArrays[(totalLength / 2)];
      }

      int upperIndex = Math.round(totalLength / 2);
      int lowerIndex = upperIndex - 1;
      double result = ( mergedArrays[lowerIndex] + mergedArrays[upperIndex] ) / 2.0;
      return result;
  }
}

