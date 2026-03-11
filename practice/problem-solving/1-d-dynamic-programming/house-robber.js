class Solution {
    // 1
    // Recursion
    // Time Complexity: O(2^n)
    // Space Complexity: O(n)
    robber1(nums) {
        const dfs = (i) => {
            if (i >= nums.length) return 0;
            return Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
        };
        return dfs(0);
    }

    // 2
    // Dynamic Programming: Top-Down
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    robber2(nums) {
        const memo = new Array(nums.length).fill(-1);
        const dfs = (i) => {
            if (i >= nums.length) return 0;
            if (memo[i] !== -1) return memo[i];
            memo[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
            return memo[i];
        };
        return dfs(0);
    }

    // 3
    // Dynamic Programming: Bottom-Up
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    robber3(nums) {
        if (!nums.length) return 0;
        if (nums.length === 1) return nums[0];

        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }

        return dp[dp.length - 1];
    }

    // 4
    // Dynamic Programming: Space Optimized
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    robber4(nums) {
        let rob1 = 0, rob2 = 0;
        for (const num of nums) {
            const temp = Math.max(num + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
