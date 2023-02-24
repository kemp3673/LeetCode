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
  public TreeNode sortedArrayToBST(int[] nums) {
      // Base case, if nums is empty, return null
      if (nums.length == 0) {
          return null;
      }
      // Create a new TreeNode
      TreeNode node = new TreeNode();
      // Set the value of the TreeNode to the middle element of nums
      node.val = nums[(int) Math.floor(nums.length / 2)];
      // Recursively call sortedArrayToBST on the left and right halves of nums
      node.left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, (int) Math.floor(nums.length / 2)));
      node.right = sortedArrayToBST(Arrays.copyOfRange(nums, (int) Math.floor(nums.length / 2) + 1, nums.length));
      // Return the TreeNode
      return node;
  }
}