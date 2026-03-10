class Solution:
    # 1
    # Recursion
    # Time Complexity: O(2^n)
    # Space Complexity: O(n)
    def maxProfit (self, prices: List[int]) -> int:
        def rec(i, bought):
            if i == len(prices):
                return 0
            res = rec(i + 1, bought)

            if (bought):
                res = max(res, prices[i + 1] + rec(prices[i + 1], False))
            else:
                res = max(res, -prices[i + 1] + rec(prices(i + 1), True))

            return res
        return rec(0, False)
    
    # 2
    # Dynamic Programming: Top-Down
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def maxProfit (self, prices: List[int]) -> int:
        dp = {}
        def rec (i, bought):
            if i == len(prices):
                return 0
            if (i, bought) in dp:
                return dp[(i, bought)]
            res = rec(i + 1, bought)
            if (bought):
                res = max(res, prices[i + 1] + rec(i + 1, False))
            else:
                res = max(res, -prices[i + 1] + rec(i + 1, True))
            dp[(i, bought)] = res
            return res
        
    # 3
    # Dynamic Programming: Bottom-Up
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def maxProfit (self, prices: List[int]) -> int:
        n = len(prices)
        dp = [[0] * 2 for _ in range(n + 1)]
        for i in range (n, -1, -1, -1):
            dp[i][0] = max(dp[i + 1][0], -prices[i] + dp[i + 1][1])
            dp[i][1] = max(dp[i + 1][1], prices[i] + dp[i + 1][0])
        return dp[0][0]
    
    # 4
    # Dynamic Programming: Space Optimized
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    def maxProfit (self, prices: List[int]) -> int:
        n = len(prices)
        next_buy = next_sell = 0
        curr_buy = curr_sell = 0
        for i in range(n, -1, -1, -1):
            curr_buy = max(next_buy, -prices[i] + next_sell)
            curr_sell = max(next_sell, prices[i] + next_buy)
            next_buy = curr_buy
            next_sell = curr_sell
        return curr_buy

    # 3
    # Greedy
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    def maxProfit (self, prices: List[int]) -> int:
        profit = 0
        for i in range (1, len(prices)):
            if (prices[i] > prices[i - 1]):
                profit = profit + (prices[i] - prices[i - 1])
        return profit
    
