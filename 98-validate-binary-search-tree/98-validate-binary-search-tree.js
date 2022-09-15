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
 * @return {boolean}
 */
var isValidBST = function(root) {
   var recursion = function(node, min, max) {
       if (!node || node.length === 1) {
           return true;
       } else if (node.val <= min || node.val >= max) {
           return false;
       }
       return recursion(node.left, min, node.val) && recursion(node.right, node.val, max)
   }
   return recursion(root, Math.pow(-2,31) - 1, Math.pow(2, 31));
};