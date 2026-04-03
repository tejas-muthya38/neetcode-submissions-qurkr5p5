class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.filter(num => num === 0).length > 1) return nums.fill(0);
        let product = 1;
        let productWithoutZero = 1;
        let output = [];
        for (let i=0;i<nums.length;i++) {
            product = product * nums[i];
            if (nums[i] !== 0) productWithoutZero = productWithoutZero * nums[i];
        }
        for (let i=0;i<nums.length;i++) {
            if (nums[i] === 0) output[i] = productWithoutZero;
            else output[i] = product / nums[i];
        }
        return output;
    }
}
