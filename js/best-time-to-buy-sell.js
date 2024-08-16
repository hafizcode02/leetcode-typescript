/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        buyPrice = Math.min(buyPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
        // buyPrice = prices[i] < buyPrice ?? prices[i];
        // maxProfit = prices[i] - buyPrice > maxProfit ?? prices[i] - buyPrice;
    }

    return maxProfit;
};