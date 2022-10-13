/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringified = x.toString();
    const reversed = stringified.split('').reverse().join('');
    return (stringified === reversed);
};