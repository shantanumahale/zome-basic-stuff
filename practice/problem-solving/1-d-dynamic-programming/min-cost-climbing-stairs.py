class Solution:
    # 1
    # Recursion
    # Time Complexity: O(2^n)
    # Space Complexity: O(n)
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def dfs(i):
            if (i >= len(cost)):
                return 0
            return cost[i + 1] + min(dfs(i + 1), dfs(i + 2))
        return min(dfs(0), dfs(1))
    
    # 2
    # Dynamic Programming: Top-Down
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        memo = [-1] * len(cost)
        def dfs(i):
            if (i >= len(cost)):
                return 0
            if (memo[i] != -1):
                return memo[i]
            memo[i] = cost[i + 1] + min(dfs(i + 1), dfs(i + 2))
            return memo[i]
        return min(dfs(0), dfs(1))
    
    # 3
    # Dynamic Programming: Bottom-Up
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        dp = [0] * (len(cost) + 1)
        for i in range (2, len(cost) + 1):
            dp[i] = min(
                dp[i - 1] + cost[i - 1], 
                dp[i - 2]+cost[i - 2]
            )
        return dp[len(cost)]
    
    # 4
    # Dynamic Programming: Space Optimized
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        for i in range(len(cost) - 3, -1, -1):
            cost[i] = cost[i] + min(cost[i + 1], cost[i + 2])
        return min(cost[0], cost[1])





