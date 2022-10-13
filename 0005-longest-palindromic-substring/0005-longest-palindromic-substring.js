/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    } else if (!s || s.length === 0) {
        return '';
    }
    let result = s[0];
    for (var i = 0; i < s.length - 1; i++) {
        if (s.length - i <= result.length) {
            break;
        }
        for (var j = s.length - 1; j > i; j--) {
            if (s.slice(i, j+1).length <= result.length) {
                break;
            }
            if (s[i] === s[j]) {
                let currentString = s.slice(i, j+1);
                let reversed = currentString.split('').reverse().join('');
                if (currentString === reversed && currentString.length > result.length) {
                    result = currentString;
                }
            }    
        }
    }
    return result;
};