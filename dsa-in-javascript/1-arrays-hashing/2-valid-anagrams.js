class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Array.fill(26);

        for (let i=0; i<s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        }

        return count.every((val) => val === 0);
    }
}