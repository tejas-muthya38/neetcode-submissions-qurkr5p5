class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let maxProfit = 0;

        while (j < prices.length) {
            if (prices[j] < prices[i]) {
                i = j;
            }
            else if (prices[j] - prices[i] > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
            j += 1;
        }
        return maxProfit;
    }
}
