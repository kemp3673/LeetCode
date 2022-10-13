/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1;
    }
    let subLength = 0;
    
    for (var i = 0; i < s.length; i++) {
        let currentLength = 0;
        let usedChars = {};
        for (var k = i; k < s.length; k++) {
            if (!usedChars[s[k]]) {
                usedChars[s[k]] = true;
                currentLength++;
                if (currentLength > subLength) {
                    subLength = currentLength;
                }
            } else {
                break;
            }
            

        }
    }
    return subLength;
};