/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let left = 0;
    let right = 1;
    while (right < prices.length) {
        let currentProfit = prices[right] - prices[left];
        if (currentProfit > profit) {
            profit = currentProfit;
        }
        if (prices[left] > prices[right]) {
            left = right;
        }
        right++;
    }
    return profit;
};