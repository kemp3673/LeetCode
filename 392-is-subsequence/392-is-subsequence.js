/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let arrayCopy = t.split('');
    let previousIndex = 0;
    for (var i=0; i < s.length; i++) {
        let currentIndex = arrayCopy.indexOf(s[i], previousIndex); 
        if (currentIndex === -1) {
            return false;
        } else {
            previousIndex = currentIndex;
            arrayCopy.splice(currentIndex, 1, 0);
        }
    }
    return true;
};