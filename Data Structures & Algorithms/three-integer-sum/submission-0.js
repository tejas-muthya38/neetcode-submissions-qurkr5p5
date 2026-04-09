class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];
        for (let i=0;i<nums.length;i++) {
            for (let j=i+1;j<nums.length;j++) {
                for (let k=i+2;k<nums.length;k++) {
                    if ((nums[i] + nums[j] + nums[k] === 0) && (i !== j && j !== k && i !== k) && !output.some(arr => arr.every(e => [nums[i], nums[j], nums[k]].includes(e)))) {
                        output.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }
        return output;
    }
}
