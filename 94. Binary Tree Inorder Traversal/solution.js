/**
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * @param {TreeNode} root
 * @return {number[]}
 */


 // In order must go from left to right. So array would be [...left, root, ...right]
var inorderTraversal = function(root) {
  // Result array to store values in order, set to scope accessible from within helper function through all recursive stacks.
  let result = [];
  // Nested function to recursively call left and right nodes
  function helper(node) {
      // Check if node exists
      if (node !== null) {
          // If exists, call left node in order to get to farthest left node first
          helper(node.left);
          // Upon collapsing left stack, push values into result array
          result.push(node.val);
          // Once left is handled, start looking to the right on each node, so that it tracks the right values from the furthest left nodes.
          helper(node.right);
      }
  }
  // Initial call to helper function with root node
  helper(root);
  // Return final result once completed
  return result;
};