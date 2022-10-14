/**
 * @param {string} digits
 * @return {string[]}
 */
var letters = {
    2: ['a','b','c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    let combinations = [];
    if (digits.length === 0) {
        return [];        
    };
    let digitsArray =  digits.split('');
    
    var mapper = function(array, currentString, position) { 
        if (currentString.length === digitsArray.length) {
            combinations.push(currentString.join(''));
            return;
        }
        for (var i = 0; i < letters[array[position]].length; i++) {
            mapper(array, currentString.concat([letters[array[position]][i]]), position+1);
        }
    };
    mapper(digitsArray, [], 0);
    return combinations;
};

