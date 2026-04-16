class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {

           
    function maxCount(count) {
        let max = 0;
        Object.keys(count).forEach(key => {
            if (count[key] > max) max = count[key];
        })
        return max;
    }

        const count = {};
        let i = 0;
        let j = 0;
        let res = 0;
        while(j < s.length) {
            count[s[j]] = (count[s[j]] || 0) + 1;
            while ((j - i + 1) - maxCount(count) > k) {
                count[s[i]] -= 1;
                i++;
            }

            res = Math.max(res, j - i + 1);
            j++;
        }
        return res;
    }
}

// 1. window - left and right start at 0.
// 2. character at r enters the map with a count of 1.
// 3. check if window size (1 now) - count of most occuring char <= k
// 4. If yes, expand window. update result to window size.
// 5. repeat this until window is not valid. once it is invalid, move l to left and decrement count