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
            console.log("res - ", res)
            return res;
        }

        function compareCounts(a, b) {
            let res = true;
            console.log("a - ", a, "b - ", b)
            Object.keys(b).forEach(key => {
                console.log("key - ", key, a, b)
                if (!a[key] || b[key] > a[key]) res = false;
            })
            return res;
        }

        for (let i = 0; i < s.length; i++) {
            if (t.includes(s[i])) {
                let j = i + t.length;
                while (j <= s.length) {
                    const substringToCheck = s.slice(i,j);
                    console.log("sub to check - ", substringToCheck)
                    if (compareCounts(charCount(substringToCheck), charCount(t))) {
                        if (!res) res = substringToCheck
                        else if (substringToCheck.length < res.length) res = substringToCheck
                    }
                    j++;
                }
            }
        }

        return res;
    }
}
