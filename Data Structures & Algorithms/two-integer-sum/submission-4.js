class Solution {
    twoSum(nums, target) {
        const myMap = new Map();
        for (let i=0; i<nums.length; i++) {
            myMap.set(nums[i], i);
        }

        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if (!isNaN(myMap.get(diff)) && myMap.get(diff) !== i) return [i, myMap.get(diff)]
        }
        return [];
    }
}
