/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13];
    if (n <= 7) {
        return fibonacciArray[n];
    }
    for (var i = 8; i <= n; i++) {
        fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1]);
    };
    return fibonacciArray[fibonacciArray.length - 1]
};