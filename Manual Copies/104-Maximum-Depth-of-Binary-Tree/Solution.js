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
 * @return {number}
 */
var maxDepth = function (root) {
  // Use recursion to traversee tree
  // If current node is null, return 0 to be added to depth and end that recursive call
  if (root == null) {
    return 0;
  }
  // Traver down both left and right branches
  // This will keep repeating until the current node is null and handled above
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  // At each level, return the highest depth of either left or right plus 1 for current depth
  // As the recursive callstack collapses, this will accrue the depth of deepest branch
  return Math.max(left, right) + 1;
};
