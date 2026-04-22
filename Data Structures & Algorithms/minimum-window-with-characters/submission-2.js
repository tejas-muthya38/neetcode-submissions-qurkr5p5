class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = "";

        if(s.length < t.length) return res;
        if (s.length === t.length) {
            if (s.split("").sort().join("") !== t.split("").sort().join("")) return res;
            return s;
        }

        function charCount(s) {
            let res = {};
            for (let i = 0; i < s.length; i++) {
                if (!res[s[i]]) res[s[i]] = 1;
                else res[s[i]] += 1;
            }
            return res;
        }

        function compareCounts(a, b) {
            let res = true;
            Object.keys(b).forEach(key => {
                if (!a[key] || b[key] > a[key]) res = false;
            })
            return res;
        }

        let i = 0;
        let j = t.length - 1;

        while (j <= s.length) {
            if (t.includes[s[i]] === false) {
                i++;
                j++
            }
            else {
                const substringToCheck = s.slice(i,j);
                if (compareCounts(charCount(substringToCheck), charCount(t))) {
                    console.log('passing - ', substringToCheck, t)
                    if (!res) res = substringToCheck
                    else if (substringToCheck.length < res.length) res = substringToCheck;
                    i++;
                }
                else j++;
            }
        }

        return res;
    }
}

