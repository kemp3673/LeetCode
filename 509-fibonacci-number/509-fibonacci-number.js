/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    let a = 0, b = 1, c;
    let num = n;
    while (num > 0) {
        c = b;
        b = a + b
        a = c;
        num--;
    }
    return c;
};