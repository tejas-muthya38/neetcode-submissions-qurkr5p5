class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestSubstring = "";
        for (let i=0;i<s.length;i++) {
            let longestSubstringInner = "";
            for (let j=i;j<s.length;j++) {
                if (!longestSubstringInner.includes(s[j])) longestSubstringInner += s[j];
                else break;
            }
            if (longestSubstringInner.length > longestSubstring.length) longestSubstring = longestSubstringInner;
        }
        return longestSubstring.length;
    }
}
