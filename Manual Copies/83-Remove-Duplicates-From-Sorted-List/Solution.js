/*
  83 Remove Duplicates from Sorted List
  Given a sorted linked list, delete all duplicates such that each element appear only once.
  For example,
  Given 1->1->2, return 1->2.
  Given 1->1->2->3->3, return 1->2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // Hold current node in linked list
  let current = head;
  // Travers through linked list until at end
  while (current !== null) {
    // Temporary holder to use for comparison
    let temp = current;
    // If there is a next node and it's value is the same as the current node
    while (temp !== null && temp.val === current.val) {
      // Skip node and move on to next
      temp = temp.next;
    }
    // Once no longer a duplicate
    // Set current node's next pointer to current temporary node
    current.next = temp;
    // Replace current node with next to continue building out linked list
    current = current.next;
  }
  // Return slimmed down lined list
  return head;
};
