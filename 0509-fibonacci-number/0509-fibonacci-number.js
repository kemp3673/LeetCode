/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibonacciArray = [0, 1, 1, 2];
    if (n <= 3) {
        return fibonacciArray[n];
    }
    for (var i = 4; i <= n; i++) {
        fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1]);
    };
    return fibonacciArray[fibonacciArray.length - 1]
};