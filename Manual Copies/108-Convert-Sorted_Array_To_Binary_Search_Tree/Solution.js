/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  // Base case if array.length === 0
  if (nums.length === 0) {
    return null;
  }
  // Create a new node
  let node = new TreeNode;
  // Set the value of the node to the middle of the array
  node.val = nums[Math.floor(nums.length/2)];
  // Set the left and right of the node to the left and right halves of the array recursively
  node.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length/2)));
  node.right = sortedArrayToBST(nums.slice(Math.floor(nums.length/2) + 1, nums.length));
  // Return node
  return node;
};