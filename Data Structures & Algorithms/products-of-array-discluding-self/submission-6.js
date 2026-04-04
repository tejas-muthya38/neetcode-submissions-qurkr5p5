class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArr = [];
        let suffixArr = [];
        let result = [];

        for (let i = 0;i < nums.length;i++) {
            prefixArr[i] = i === 0 ? 1 : prefixArr[i-1] * nums[i-1];
        }
        for (let i = nums.length - 1;i >= 0;i--) {
            suffixArr[i] = i === nums.length - 1 ? 1 : suffixArr[i+1] * nums[i+1]; 
        }

        console.log("prefix - ", prefixArr, "suffix - ", suffixArr);

        for (let i = 0; i < nums.length ; i++) {
            result[i] = prefixArr[i] * suffixArr[i];
        }
        return result;
    }
}
