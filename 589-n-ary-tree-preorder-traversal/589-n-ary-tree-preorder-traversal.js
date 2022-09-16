/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    
    var traversal = branch => {
        result.push(branch.val);
        if ( branch.children) {
            branch.children.forEach(child => {
            traversal(child);
            });
        } else {
            return;
        }
    }
    traversal(root);
    return result;
};