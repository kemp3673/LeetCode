/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var resultList = {};
    resultList.head = null;
    resultList.tail = null;
    
    const recusive = (node1, node2, carryOverSum) => {
        let newNode = {
            val: 0,
            next: null
        }     
        let sumValue = node1.val + node2.val + carryOverSum;
        let remainder = 0;
        if (sumValue > 9) {
            remainder = Math.floor(sumValue / 10);
            sumValue -= remainder * 10
        }
        newNode.val = sumValue;
        if (resultList.head === null) {
            resultList.head = newNode;
            resultList.tail = newNode;
        } else {
            resultList.tail.next = newNode;
            resultList.tail = newNode;
        }
        if (node1.next !== null || node2.next !== null || remainder > 0) {
            leftNode = node1.next || {val:0, next:null};
            rightNode = node2.next || {val:0, next: null};
            recusive(leftNode, rightNode, remainder)
        }
    }
    recusive(l1, l2, 0);
    return resultList.head;
};