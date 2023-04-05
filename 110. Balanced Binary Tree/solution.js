/**
 * 110. Balanced Binary Tree
 *
 * Given a binary tree, determine if it is
height-balanced
.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Base case, if no node, or node has no children return true since it is balanced.
  if (root == null || (root.left == null && root.right == null)) {
    return true;
  }

  //Traverse left and right node for each parent node until it reaches end, then return back count incrementing at each level. Compare the values and if difference is greater than 1 return false.
  function helper(node) {
    // Leaf node, end of branch
    if (node.left === null && node.right === null) {
      // If at end of branch, return 1 for current height;
      return 1;
    }
    // Left subtree
    let leftHeight = 0;
    // If left node, recursivley call helper function on left node and set leftHeight to number returned (either Integer[balanced] or -1[unbalance])
    if (node.left !== null) leftHeight = helper(node.left);
    // If the value returned from the left node is -1, branch along tree is unbalanced. Return -1 up the callstack to return unbalanced status.
    if (leftHeight === -1) return -1;

    //Right subtree
    let rightHeight = 0;
    // If right node, recursivley call helper function on right node and set rightHeight to number returned (either Integer[balanced] or -1[unbalance])
    if (node.right !== null) rightHeight = helper(node.right);
    // If value return is -1[unbalanced] return that value back through callstack
    if (rightHeight === -1) return -1;
    // Check current tree
    // If difference between left and right height is greater than 1, the tree is unbalanced.
    if (Math.abs(rightHeight - leftHeight) <= 1) {
      // If balanced, get the max height between the two height, and add one to represent current height of branch.
      return Math.max(rightHeight, leftHeight) + 1;
    } else {
      // Otherwise, return -1 to represent unbalanced since difference was greater than 1
      return -1;
    }
  }
  // Invoked and return if the helper function return -1 to signify unbalanced.
  return helper(root) !== -1;
};
