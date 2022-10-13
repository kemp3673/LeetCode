/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num === 0) {
        return 0;
    }
    let resultString = '';
    const numerals = Object.keys(romanNumerals);
    while (num > 0) {
        for (var i = numerals.length - 1; i >= 0; i--) {
            if (num >= 1000) {
                resultString = resultString + 'M';
                num = num - 1000;
            } else if (romanNumerals[numerals[i]] > num && romanNumerals[numerals[i - 1]] <= num) {
                resultString = resultString + numerals[i - 1];
                num = num - romanNumerals[numerals[i - 1]];
            } 
        }
    }
    return resultString;
};



var romanNumerals = {
  I: 1,
  IV: 4,  
  V: 5,
  IX: 9,  
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,  
  D: 500,
  CM: 900,  
  M: 1000
};