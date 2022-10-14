/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    let prefix = '';
    let end = false;
    let temp = '';
    for (var i = 0; i < strs[0].length; i++) {
        // i is positon in each word
        
        if (end) {
            break;
        }
        for (var j = 0; j < strs.length; j++) {
            // j is the word in the array
            if (j === 0) {
                temp = strs[j][i];
            } else if (temp !== strs[j][i]) {
                end = true;
                break;
            } else if (j === strs.length - 1) {
                prefix = prefix + temp;
            }
        }
    }
    return prefix;
};