class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];

        if (!Array.isArray(nums) || nums.length < 3) return [];

        const sortedNums = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < sortedNums.length; i++) {

            if (sortedNums[i] > 0) break;
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let j = i + 1;
            let k = sortedNums.length - 1;

            while(j < k) {
                if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                    output.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                    j++;
                    k--;
                    while (j < k && sortedNums[j] === sortedNums[j - 1]) {
                        j++;
                    }
                }
                else if (sortedNums[i] + sortedNums[j] + sortedNums[k] > 0) {
                    k--;
                }
                else {
                    j++;
                }
            }
        }
        return output;
    }
}

// [-4, -1, -1, 0, 1, 2]