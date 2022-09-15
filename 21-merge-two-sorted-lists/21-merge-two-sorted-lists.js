/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sorted = {val: 0, next: null};
    let sorting = function(node1, node2, sortedNode) {
        if (!node1) {
            sortedNode.next = node2;
            return;
        } else if (!node2) {
            sortedNode.next = node1;
            return;
        }
        if (node1.val <= node2.val) {
            sortedNode.next = {val: node1.val, next: null};
            sorting(node1.next, node2, sortedNode.next);
        } else {
            sortedNode.next = {val: node2.val, next: null};
            sorting(node1, node2.next, sortedNode.next);
        }
    }
    sorting(list1, list2, sorted);
    return sorted.next;
};