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
    let result = [];
    
    var traversal = node => {
        if (!root) {
            return;
        }
        result.push(node.val);
        if ( node.children) {
            node.children.forEach(child => {
            traversal(child);
            });
        } else {
            return;
        }
    }
    traversal(root);
    return result;
};