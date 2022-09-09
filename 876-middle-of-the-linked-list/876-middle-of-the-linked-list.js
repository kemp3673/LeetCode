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
var middleNode = function(head) {
    let node = head;
    let count = 1;
    let middleCount = 1;
    let middleNode = head;
    
    while (node) {
        count++
        node = node.next;
        if (Math.ceil(count/2) !== middleCount) {
            middleNode = middleNode.next;
            middleCount++;
        }
    }
    return middleNode;
};