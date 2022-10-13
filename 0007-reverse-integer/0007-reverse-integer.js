/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let abs = Math.abs(x);

    let reversed = Number(abs.toString().split('').reverse().join(''));
    if (x < 0) {reversed *= -1;};
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) + 1) {
        return 0;
    }
    return reversed;
};