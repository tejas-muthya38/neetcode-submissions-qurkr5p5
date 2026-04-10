class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let i = 0;
        let j = heights.length - 1;

        let maxWater = (j - i) * Math.min(heights[i], heights[j]);

        while (i < j) {
            if ((j - i) * Math.min(heights[i], heights[j]) > maxWater) {
                maxWater = (j - i) * Math.min(heights[i], heights[j]);
            }
            if (heights[i] > heights[j]) {
                j--;
            }
            else i++;
        }

        return maxWater;
    }
}
