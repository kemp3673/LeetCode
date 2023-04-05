/**
 *
 * 111. Minimum Depth of Binary Tree
 *
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5


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
 * @return {number}
 */

// Recursive function taking in node
var minDepth = function (root) {
  // Check if no node, if so return 0 to signify a height of 0;
  if (root == null) return 0;
  // Alias for left and right heights, recursively calling minDepth on each node.
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  // Once on leaf, check if either leaf has height of 0.
  if (left == 0 || right == 0) {
    // return both heights to account for unbalanced tree plus 1 for current node height (if one is 0, adding 0 doesnt effect height but allows for one or the other to unbalanced).
    return left + right + 1;
    // Otherwise
  } else {
    // Return the smallest int of left or right +1 for current height.
    return Math.min(left, right) + 1;
  }
};
