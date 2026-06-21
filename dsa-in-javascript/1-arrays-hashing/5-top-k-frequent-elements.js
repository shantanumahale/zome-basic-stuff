class Solution {
    topKFrequent (nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length }, () => []);
        // freq: index represents the count
        // freq: the array stored at index represents numbers occuring index times

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        } 
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i=freq.length - 1; i>0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}