/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // Since we don't have access to head
    // We can't change previous node's .next
    // So we have to modify current node to become it's next node
    // Then delete the next node resulting in current node being a copy of it's next and not the original node that needed to be delted.
    nextNode = node.next;
    node.val = node.next.val;
    node.next = node.next.next;
    nextNode.next = null;
    delete(nextnode);
};