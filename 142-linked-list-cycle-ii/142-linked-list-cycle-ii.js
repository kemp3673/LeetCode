/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return head;
    }
    
    const indexes = new Set();
    let cycleIndex = null

    var traverseNodes = (node) => {
        if (indexes.has(node)) {
            cycleIndex = node;
            return;
        } else {
            indexes.add(node);
            if (node.next) {
                traverseNodes(node.next);
            } else {
                return;
            }
        }
    }
    traverseNodes(head);
    return cycleIndex;
};