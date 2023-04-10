/*
39. Combination Sum
Medium

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/


/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
*/

var combinationSum = function(candidates, target) {
  let results = new Set();

  var findCombos = (sum, current) => {
      if (sum == target) {
              results.add(current.slice().sort().join());
              return;
          }
      if (sum > target) return;

      for (var i = 0; i < candidates.length; i++) {
          current.push(candidates[i]);
          sum += candidates[i];
          findCombos(sum, current);
          current.pop();
          sum -= candidates[i];
      }
  }
  findCombos(0, []);
  return Array.from(results).map(combination => combination.split(','));
};
