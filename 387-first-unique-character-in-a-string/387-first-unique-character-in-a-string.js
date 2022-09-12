/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let uniqueChars = {};
    
    for (var i = 0; i < s.length; i++) {
        if (uniqueChars[s[i]]) {
            uniqueChars[s[i]].count++
        } else {
            uniqueChars[s[i]] = {index: i, count: 1}
        }
    }
    for (var j = 0; j < s.length; j++) {
        if (uniqueChars[s[j]].count === 1) {
            return uniqueChars[s[j]].index;
        }
    }
   return -1;
};