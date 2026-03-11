class Solution {
    // 1
    // Recursion
    // Time Complexity: O(3^n)
    // Space Complexity: O(n)
    tribonacci1(n) {
        if (n <= 2) {
            return n !== 0 ? 1 : 0;
        }
        return this.tribonacci1(n - 1) + this.tribonacci1(n - 2) + this.tribonacci1(n - 3);
    }

    // 2
    // Dynamic Programming: Top-Down
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    tribonacci2(n, dp = {}) {
        if (n <= 2) {
            return n !== 0 ? 1 : 0;
        }
        if (n in dp) return dp[n];
        dp[n] = this.tribonacci2(n - 1, dp) + this.tribonacci2(n - 2, dp) + this.tribonacci2(n - 3, dp);
        return dp[n];
    }

    // 3
    // Dynamic Programming: Bottom-Up
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    tribonacci3(n) {
        if (n <= 2) return n !== 0 ? 1 : 0;
        const dp = new Array(n + 1).fill(0);
        dp[1] = 1;
        dp[2] = 1;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        return dp[n];
    }

    // 4
    // Dynamic Programming: Space Optimized
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    tribonacci4(n) {
        const t = [0, 1, 1];
        if (n < 3) return t[n];
        for (let i = 3; i <= n; i++) {
            t[i % 3] = t[0] + t[1] + t[2];
        }
        return t[n % 3];
    }
}
