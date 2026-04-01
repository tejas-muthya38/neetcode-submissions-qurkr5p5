class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObject = {};
        let repeatFlag = false;
        for (let i=0; i<nums.length; i++) {
            if (numsObject[nums[i]]) repeatFlag = true;
            numsObject[nums[i]] = 1;
        }
        return repeatFlag;
    }
}
