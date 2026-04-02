class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let isAnagram = true;
        let sObject = {};
        let tObject = {};
        for(let i=0;i<s.length;i++) {
            if (sObject[s.charAt(i)]) {
                sObject[s.charAt(i)] += 1;
            }
            else sObject[s.charAt(i)] = 1;
            
            if (tObject[t.charAt(i)]) {
                tObject[t.charAt(i)] += 1;
            }
            else tObject[t.charAt(i)] = 1;
        }
        Object.keys(sObject).forEach(key => {
            if (sObject[key] !== tObject[key]) isAnagram = false;
        })
        return isAnagram;
    }
}
