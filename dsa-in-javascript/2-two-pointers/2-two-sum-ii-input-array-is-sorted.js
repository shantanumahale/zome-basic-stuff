class Solution {
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1

        while (l < r) {
            const currSum = numbers[l] + numbers[r];
            if (currSum > target) {
                r--;
            } else if (currSum < target) {
                l++;
            } else {
                return [l+1, r+1];
            }
        }
        return [];
    }
}