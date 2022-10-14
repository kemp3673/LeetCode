/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let counter = 0;
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let first = dummyHead;
    
    while (first.next !== null) {
        counter++;
        first = first.next;
    };
    let length = counter - n;
    first = dummyHead;
    while(length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummyHead.next;
};