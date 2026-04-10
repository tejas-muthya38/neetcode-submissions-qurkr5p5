class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxWater = 0;

        for (let i=0;i<heights.length - 1;i++) {
            let j = i + 1;

            while (j < heights.length) {
                if ((j - i) * Math.min(heights[i], heights[j]) > maxWater) {
                    console.log(i, j);
                    maxWater = (j - i) * Math.min(heights[i], heights[j]);
                }
                j++;
            }
        }
        return maxWater;
    }
}
