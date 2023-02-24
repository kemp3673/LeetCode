/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Put the result in an array
    let newString = [];
    // Remove all spaces
    // and convert to lowercase
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' || s[i] !== ',' || s[i] !== '.' || s[i] !== '?' || s[i] !== '!' || s[i] !== ':' || s[i] !== ';') {
            newString.push(s[i].toLowerCase());
        }
    }
    // Create two pointers at the beginning and end of the array
    let left = 0;
    let right = newString.length - 1;
    // While the left pointer is less than the right pointer
    while (left < right) {
        // if left and right are not equal
        if (newString[left] !== newString[right]) {
            // return false
            return false;
        }
        // increment left
        left++;
        // decrement right
        right--;
    }
    // return true if the loop completes
    return true;
};