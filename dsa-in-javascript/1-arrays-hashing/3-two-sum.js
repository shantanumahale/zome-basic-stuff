class Solution {
    twoSum (nums, target) {
        const map = new Map();
        // { number: index }
        // Object can also be used but in objects, keys can only be strings.
        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}