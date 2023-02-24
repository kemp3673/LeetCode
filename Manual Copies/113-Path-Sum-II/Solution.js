/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  // If root is null, return []
  if (!root) return [];
  // Create array to hold results
  const result = [];
  // Create array to hold current path
  const path = [];
  // Helper function
  const helper = function(node, sum) {
      // Check if node is null
      if (!node) return;
      // Add current node value to path array
      path.push(node.val);
      // Check if node is a leaf
      if (!node.left && !node.right) {
          // If leaf, check is equals to sum
          if (sum === node.val) {
              // Add to results array
              result.push([...path]);
          } else return;
      }
      // Recursively call left node
      helper(node.left, sum - node.val);
      // Recursively call right node
      helper(node.right, sum - node.val);
      // Remove current node from path array when collapsing
      path.pop();
  }
  // Initial call to helper function
  helper(root, targetSum);
  // Return result
  return result;
};