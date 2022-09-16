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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = {}
    var helper = (node, level) => {
        if ( !node ) {
            return;
        }
        level = level || 0;
        if (!result[level]) {
            result[level] = [];
        }
        result[level] = result[level].concat([node.val]);
        level++
        helper(node.left, level);
        helper(node.right, level);
    }
    helper(root)
    return Object.values(result);
};