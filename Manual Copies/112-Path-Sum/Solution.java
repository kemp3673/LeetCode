/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public boolean hasPathSum(TreeNode root, int targetSum) {
      // If no root node, there is no path
      if (root == null) return false;
      // If leaf
      else if (root.left == null && root.right == null) {
          // Check if targetSum is met (sum is updated with each recursive call)
          return targetSum == root.val;
      }
      // If not leaf, recursively call both left and right nodes checking each path
      return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  }
}