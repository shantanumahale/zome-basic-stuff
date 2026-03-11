class Solution {
    // 1
    // Recursion
    // Time Complexity: O(2^n)
    // Space Complexity: O(n)
    climbStairs1(n) {
        const dfs = (i) => {
            if (i === n) return 1;
            if (i > n) return 0;
            return dfs(i + 1) + dfs(i + 2);
        };
        return dfs(0);
    }

    // 2
    // Dynamic Programming: Top-Down
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    climbStairs2(n) {
        const cache = new Array(n).fill(-1);
        const dfs = (i) => {
            if (i === n) return 1;
            if (i > n) return 0;
            if (cache[i] !== -1) return cache[i];
            cache[i] = dfs(i + 1) + dfs(i + 2);
            return cache[i];
        };
        return dfs(0);
    }

    // 3
    // Dynamic Programming: Bottom-Up
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    climbStairs3(n) {
        if (n <= 2) return n;
        const dp = new Array(n + 1).fill(0);
        dp[1] = 1;
        dp[2] = 2;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

    // 4
    // Dynamic Programming: Space Optimized
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    climbStairs4(n) {
        let one = 1;
        let two = 2;
        for (let i = 0; i < n - 1; i++) {
            const temp = one;
            one = one + two;
            two = temp;
        }
        return one;
    }

    // 5
    // Matrix Exponentiation
    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    climbStairs5(n) {
        if (n === 1) return 1;

        const matrixMultiply = (A, B) => {
            return [
                [
                    A[0][0] * B[0][0] + A[0][1] * B[1][0],
                    A[0][0] * B[0][1] + A[0][1] * B[1][1]
                ],
                [
                    A[1][0] * B[0][0] + A[1][1] * B[1][0],
                    A[1][0] * B[0][1] + A[1][1] * B[1][1]
                ]
            ];
        };

        const matrixPow = (M, p) => {
            let result = [[1, 0], [0, 1]];
            let base = M;
            while (p) {
                if (p % 2 === 1) {
                    result = matrixMultiply(result, base);
                }
                base = matrixMultiply(base, base);
                p = Math.floor(p / 2);
            }
            return result;
        };

        const M = [[1, 1], [1, 0]];
        const result = matrixPow(M, n);
        return result[0][0];
    }

    // 6
    // Math
    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    climbStairs6(n) {
        const sqrt5 = Math.sqrt(5);
        const phi = (1 + sqrt5) / 2;
        const psi = (1 - sqrt5) / 2;
        n += 1;
        return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
    }
}
