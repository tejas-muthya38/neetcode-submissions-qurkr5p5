class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObject = {};
        let duplicateFlag = false;
        for (let i=0;i<nums.length;i++) {
            if (numsObject[nums[i]]) {
                duplicateFlag = true;
                break;
            }
            numsObject[nums[i]] = 1;
        }
        return duplicateFlag;
    }
}
