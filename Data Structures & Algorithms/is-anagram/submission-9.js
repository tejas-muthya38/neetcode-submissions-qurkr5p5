class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sObject = {};
        const tObject = {};
        let isAnagram = true;

        for (let i=0;i<s.length;i++) {
            if (sObject[s.charAt(i)]) sObject[s.charAt(i)] += 1;
            else sObject[s.charAt(i)] = 1;
        }
        for (let i=0;i<t.length;i++) {
            if (tObject[t.charAt(i)]) tObject[t.charAt(i)] += 1;
            else tObject[t.charAt(i)] = 1;
        }
;

        Object.keys(sObject).forEach(sChar => {
            if (!tObject[sChar] || tObject[sChar] !== sObject[sChar]) isAnagram = false;
        })
        return isAnagram;
    }
}
