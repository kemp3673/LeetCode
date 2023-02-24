import javax.swing.tree.TreeNode;

class Solution {
  public boolean isSymmetric(TreeNode root) {
    // Base case, if root is null, return true
    if (root == null) {
      return true;
    }
    // Call helper function to check if left and right subtrees are mirror images
    return isMirror(root.left, root.right);
  }
  // Helper function to check if left and right subtrees are mirror images
  private boolean isMirror(TreeNode left, TreeNode right) {
    // Base case, if both left and right are null, return true
    if (left == null && right == null) return true;
    // Base case, if either left or right is null, return false
    if (left == null || right == null) return false;
    // If left and right are not null, check if their values are equal
    if (left.val != right.val) return false;
    // If left and right are not null and their values are equal, check if their left and right subtrees are mirror images
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}