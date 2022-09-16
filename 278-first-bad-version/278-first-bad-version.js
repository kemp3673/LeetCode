/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let result;
        if (n === 1) {
            if (isBadVersion(n)) {
                return n;
            } else {
                return null;
            }
        }
        var helper = (start, end) => {
            let middle = Math.ceil((end - start) / 2) + start;
            if (isBadVersion(middle)) {
                if (!isBadVersion(middle - 1)) {
                    result = middle;
                    console.log("RESULT: ", result)
                    return;
                }
                helper(start, middle);
            } else {
                helper(middle, end);
            }
        } 
        helper(0, n);
        return result;
    };
};