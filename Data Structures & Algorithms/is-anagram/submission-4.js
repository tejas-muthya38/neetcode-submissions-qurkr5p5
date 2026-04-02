class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let borrowedT = t;
        let isAnagram = true;
        for(let i=0;i<s.length;i++) {
            if(!borrowedT.includes(s.charAt(i))) isAnagram = false;
            borrowedT = borrowedT.replace(s.charAt(i), "");
        }
        if (borrowedT !== "") {
            return false;
        }
        return isAnagram;
    }
}
