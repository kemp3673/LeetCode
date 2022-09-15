/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    
     
    let a = 0, b = 1, c;
    
    let num = n - 1;
    while (num > 0) {
        c = b;
        b = a + b
        a = c;
        num--;
        
    }
    return b; 
};



/* 
Check if n is 0, and if so just return 0 right off the bat.

In order to transverse through the sequence we need to track and update what numbers we are currently working with.

To Track, we will use variables a, b & c to track the left value and right values. c is a temporary holder to allow us to update a & bs values/

Var c Previous right value
Var b Adds the two numbers and changes right value to the sum of the two
Var a Replaces left value with previous right value

Example:
        0, 1, 1, 2, 3, 5, 8 <-- example sequence. 
        [a = 0, b = 1], 1, 2, 3, 5, 8 <-- We start with the first two numbers 0 & 1
        On the step:
        0, [a = 1, b = 1], 2, 3, 5, 8 <-- Since 0+1=1, the next hightest would be 1 (var b)
        
        
Decrement our counter to count down so we stop repeating the process
Return final right (largest) number;
*/