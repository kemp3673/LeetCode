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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Base case 1: If the root is null, return false since there is no path
    if (root === null) {
        return false;
    }
    // If the root is a leaf node, check if the value of the root is equal to the target sum
    // NOTE: Target sum is updated to be the target sum minus the value of the node in the previous recursive call
    else if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    // If the root is not a leaf node, check if the target sum minus the value of the root is equal to the sum of the left subtree or the right subtree
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};