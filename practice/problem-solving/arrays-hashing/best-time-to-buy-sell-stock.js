class Solution {
    // 1
    // Recursion
    // Time Complexity: O(2^n)
    // Space Complexity: O(n)
    maxProfit1(prices) {
        const rec = (i, bought) => {
            if (i === prices.length) return 0;
            let res = rec(i + 1, bought);
            if (bought) {
                res = Math.max(res, prices[i] + rec(i + 1, false));
            } else {
                res = Math.max(res, -prices[i] + rec(i + 1, true));
            }
            return res;
        };
        return rec(0, false);
    }

    // 2
    // Dynamic Programming: Top-Down
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    maxProfit2(prices) {
        const dp = {};
        const rec = (i, bought) => {
            if (i === prices.length) return 0;
            const key = `${i},${bought}`;
            if (key in dp) return dp[key];
            let res = rec(i + 1, bought);
            if (bought) {
                res = Math.max(res, prices[i] + rec(i + 1, false));
            } else {
                res = Math.max(res, -prices[i] + rec(i + 1, true));
            }
            dp[key] = res;
            return res;
        };
        return rec(0, false);
    }

    // 3
    // Dynamic Programming: Bottom-Up
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    maxProfit3(prices) {
        const n = prices.length;
        const dp = Array.from({ length: n + 1 }, () => [0, 0]);
        for (let i = n - 1; i >= 0; i--) {
            dp[i][0] = Math.max(dp[i + 1][0], -prices[i] + dp[i + 1][1]);
            dp[i][1] = Math.max(dp[i + 1][1], prices[i] + dp[i + 1][0]);
        }
        return dp[0][0];
    }

    // 4
    // Dynamic Programming: Space Optimized
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    maxProfit4(prices) {
        const n = prices.length;
        let nextBuy = 0, nextSell = 0;
        let currBuy = 0, currSell = 0;
        for (let i = n - 1; i >= 0; i--) {
            currBuy = Math.max(nextBuy, -prices[i] + nextSell);
            currSell = Math.max(nextSell, prices[i] + nextBuy);
            nextBuy = currBuy;
            nextSell = currSell;
        }
        return currBuy;
    }

    // 5
    // Greedy
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    maxProfit5(prices) {
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
}
