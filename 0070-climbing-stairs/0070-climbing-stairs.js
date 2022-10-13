/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let counter = 0;
//     if (n <= 1) {
//         return 1;
//     }
//     for (var i = 1; i <= 2 && i <= n; i++) {
//     counter += climbStairs(n - i);
//     }
//     return counter;
// };

// Works, but too slow
// Used it to find pattern

// Every time n + 1, solution is (n-2) + (n-1);
// [1,1,2,3,5,8,13,21,34,55,89] <-- use this pattern to solve like fibonocci sequence

var climbStairs = function(n) {
    let sequence = [1,1,2];
    if (n <= 2) {
        return sequence[n];
    }
    
    for (var i = 3; i <= n; i++) {
        sequence.push(sequence[i-2]+sequence[i-1]);
    }
    return sequence[n];
}