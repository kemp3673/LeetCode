/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let charsChanges = {};
    for (var i = 0; i < t.length; i++) {
        let usedLetters = Object.values(charsChanges);
        if (charsChanges[s[i]]) {
            if (charsChanges[s[i]] !== t[i]) {
                return false;
            } 
        } else if (usedLetters.includes(t[i])) {
            return false;
        } else {
            charsChanges[s[i]] = t[i];
        }
        if (i === s.length - 1) {
            return true;
        }
    }
};