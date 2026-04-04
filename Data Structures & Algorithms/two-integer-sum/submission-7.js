class Solution {
    twoSum(nums, target) {
        const numsObject = {};
        let resultArray = [];
        for (let i=0;i<nums.length;i++) {
            numsObject[nums[i]] = i;
        }
        for (let i = 0;i<nums.length;i++) {
            if (!isNaN(numsObject[target - nums[i]]) && i !== numsObject[target - nums[i]]) {
                resultArray = [i, numsObject[target - nums[i]]]
            }
        }
        return resultArray;
    }
}
