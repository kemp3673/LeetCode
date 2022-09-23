/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let larger;
    let smaller;
    let result;
    
    if (p.val < q.val) {
        smaller = p;
        larger = q;
    } else {
        smaller = q;
        larger = p;
    };
    
    let helperFunction = (node) => {
        if (node.val >= smaller.val && node.val <= larger.val) {
            result = node;
            return;
        } else if (node.val > larger.val) {
            helperFunction(node.left);
        } else if (node.val < smaller.val) {
            helperFunction(node.right);
        }
    }
    
    helperFunction(root);
    return result;
};