/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1;
    }
    let count = 0;
    let singleLetter = false;
    let chars = {};
    for (var i = 0; i < s.length; i++) {
        if (chars[s[i]]) {
            chars[s[i]]++
        } else {
            chars[s[i]] = 1;
        }
    }
    let unique = Object.keys(chars);
    for (var j = 0; j < unique.length; j++) {
        if (chars[unique[j]] / 2 >= 1) {
            let divisibleTwo = (Math.floor(chars[unique[j]] / 2)*2)
            count = count + divisibleTwo;
            chars[unique[j]] = chars[unique[j]] - divisibleTwo;
            
        }
        if (chars[unique[j]] === 1) {
            singleLetter = true;
        }
    }
    if (singleLetter) {
        count++
    }
    return count;
};