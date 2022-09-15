/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // Check if n is 0, and if so just return 0 right off the bat.
    if (n === 0) {
        return 0;
    }
    
    // in order to transverse through the sequence we need to track and update what numbers we are currently working with. 
    let a = 0, b = 1, c;
    // a is the left number, b is the right number, and c is a temporary holder that will allow us to shuffle and increment;
    let num = n - 1;
    while (num > 0) {
        c = b; // Holds onto previous right value
        b = a + b // Adds the two numbers and changes right value to the sum of the two
        a = c; // Replacs left value with previous right value
        /* 
        Example
        [0, 1], 1, 2, 3, 5, 8 <-- We start with the first two numbers 0 & 1
        On the step:
        0, [1, 1], 2, 3, 5, 8 <-- Since 0+1=1, the next hightest would be 1 (var b)
        */
        num--;
        // decrement our counter to count down so we stop repeating the process
    }
    return b; // Return final right (largest) number, has to be c as b is ;
};