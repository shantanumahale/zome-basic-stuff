class Solution {
    // 1
    // Recursion
    // Time Complexity: O(2^n)
    // Space Complexity: O(n)
    minCostClimbingStairs1(cost) {
        const dfs = (i) => {
            if (i >= cost.length) return 0;
            return cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
        };
        return Math.min(dfs(0), dfs(1));
    }

    // 2
    // Dynamic Programming: Top-Down
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    minCostClimbingStairs2(cost) {
        const memo = new Array(cost.length).fill(-1);
        const dfs = (i) => {
            if (i >= cost.length) return 0;
            if (memo[i] !== -1) return memo[i];
            memo[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            return memo[i];
        };
        return Math.min(dfs(0), dfs(1));
    }

    // 3
    // Dynamic Programming: Bottom-Up
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    minCostClimbingStairs3(cost) {
        const dp = new Array(cost.length + 1).fill(0);
        for (let i = 2; i <= cost.length; i++) {
            dp[i] = Math.min(
                dp[i - 1] + cost[i - 1],
                dp[i - 2] + cost[i - 2]
            );
        }
        return dp[cost.length];
    }

    // 4
    // Dynamic Programming: Space Optimized
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    minCostClimbingStairs4(cost) {
        for (let i = cost.length - 3; i >= 0; i--) {
            cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
    }
}
