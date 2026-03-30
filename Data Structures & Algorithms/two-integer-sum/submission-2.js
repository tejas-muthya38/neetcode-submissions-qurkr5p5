class Solution {
    twoSum(nums, target) {
        const copyOfNums = [];
        for (let i = 0; i < nums.length; i++) {
            copyOfNums[i] = [nums[i], i];
        }
        copyOfNums.sort((a, b) => a[0] - b[0]);

        let i = 0;
        let j = nums.length - 1;

        while (i < j) {
            let sumToCheck = copyOfNums[i][0] + copyOfNums[j][0];
            if (sumToCheck === target) {
                return  [Math.min(copyOfNums[i][1], copyOfNums[j][1]), Math.max(copyOfNums[i][1], copyOfNums[j][1])];
            }
            else if (sumToCheck < target) i += 1;
            else j -= 1;
        }
    }
}
