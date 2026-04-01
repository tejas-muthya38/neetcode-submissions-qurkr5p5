class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        let i = 1;
        while (i < prices.length) {
            if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
            minPrice = Math.min(minPrice, prices[i]);
            i += 1;
        }
        return maxProfit;
    }
}
