/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let parsedS = parser(s);
    let parsedT = parser(t);
    console.log('S: ', parsedS);
    console.log('T: ', parsedT);
    if (parsedS === parsedT) {
        return true;
    }
    return false;
};

var parser = function(string) {
    let stringArray = string.split('');
    var findBackSpace = function() {
        let index = stringArray.indexOf('#');
        if (index !== -1) {
            if (index - 1 > -1) {
                stringArray.splice(index - 1, 2);
                findBackSpace();
            } else {
                stringArray.splice(index, 1);
                findBackSpace(); 
            }            
        }   
    }
    findBackSpace();
    return stringArray.join('');
}