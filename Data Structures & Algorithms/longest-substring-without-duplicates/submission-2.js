class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let sObj = {};
        let res = 0;

        for (let j=0;j<s.length;j++) {
            while(sObj[s[j]]) {
                delete sObj[s[i]];
                i = i + 1;
            }
            sObj[s[j]] = true;
            res = Math.max(res, j - i + 1);
        }
        return res;
    }
}
