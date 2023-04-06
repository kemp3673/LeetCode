/*
23. Merge k Sorted Lists
Hard

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
*/




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // Check if no lists
  if (lists.length == 0) return null;
  // Iterate through lists
  for (var i = 1; i < lists.length; i++) {
      // pass two into helper function
      lists[0] = merge(lists[0], lists[i]);
  };
  return lists[0];
};


var merge = (list1, list2) => {
  // Check if either list is empty, if it is return other list
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  // Check which val is lower and recursively call merge helper
  if (list1.val < list2.val) {
      // link node's next with lowest value to returned list from recursivley called merge helper
      list1.next = merge(list1.next, list2);
      return list1;
  } else {
      list2.next = merge(list1, list2.next);
      return list2;
  }
};