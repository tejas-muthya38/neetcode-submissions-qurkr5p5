class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNum(c) {
        return /[a-z0-9]/i.test(c);
    }

    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            while (i < j && !this.isAlphaNum(s[i])) i++;
            while (i < j && !this.isAlphaNum(s[j])) j--;

            const a = s[i].toLowerCase();
            const b = s[j].toLowerCase();

            if (a !== b) return false;
            i++;
            j--;
        }
        return true;
    }
}
