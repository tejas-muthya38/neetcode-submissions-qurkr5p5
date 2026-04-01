class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();
        let repeatFlag = false;
        for (let i=0; i<nums.length; i++) {
            if (numsSet.has(nums[i])) repeatFlag = true;
            numsSet.add(nums[i]);
        }
        return repeatFlag;
    }
}
