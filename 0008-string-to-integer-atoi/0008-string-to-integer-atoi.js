/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let spaceParsed = whiteSpaceParser(s.split(''));
    let negativeObj = negativeCheck(spaceParsed);
    let numbersOnly = reduceToNumbers(negativeObj.string);
    let rangeCheck = checkRange(numbersOnly * negativeObj.isNegative);
    // console.log('PARSED: ', spaceParsed);
    // console.log('NEGATIVE: ', negativeObj);
    // console.log('NUMBERS: ', numbersOnly);
    // console.log('RANGE: ', rangeCheck);
    return rangeCheck;    
};

var whiteSpaceParser = function(string) {
    let exitCondition = false;
    while (exitCondition !== true) {
        if (string[0] === ' ') {
           string.splice(0, 1); 
        } else {
            break;
        }
    }
    return string;
};

var negativeCheck = function(string) {
    if (string[0] === '-') {
        string.splice(0, 1);
        return {isNegative: -1, string: string};
    } else if (string[0] === '+') {
        string.splice(0, 1);
        return {isNegative: 1, string: string};
    } else {
        return {isNegative: 1, string: string};
    }
};

var reduceToNumbers = function(string) {
    let result = [];
    for (var i = 0; i < string.length; i++) {
        if (!isNaN(Number(string[i])) && string[i] !== ' ') {
            result.push(string[i]);
        } else {
            break;
        }
    }
    if (result.length === 0) {
        result.push(0);
    }
    console.log('RESULT INSIDE REDUCE: ', result)
    return Number(result.join(''));
};

var checkRange = function(num) {
    console.log(num)
    if (num >= Math.pow(-2, 31) && num <= Math.pow(2, 31) - 1) {
        return num;
    } else if (num < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
}