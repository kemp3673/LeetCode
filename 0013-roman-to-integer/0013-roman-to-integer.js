/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let temp = 0;
    
    for (var i = s.length - 1; i >= 0; i--) {
        
        if (romanNumerals[s[i]] > romanNumerals[s[i - 1]]) {
            temp = romanNumerals[s[i]];
            sum += romanNumerals[s[i]]; 
        } else if (temp > 0) {
            if (temp > romanNumerals[s[i]]) {
                sum -= romanNumerals[s[i]];
            } else {
                temp = 0;
                sum += romanNumerals[s[i]];
            }
        } else {
            sum += romanNumerals[s[i]];
        }
    }
    return sum;
};


var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}