class Solution:
    # 1
    # Recursion
    # Time Complexity: O(2^n)
    # Space Complexity: O(n)
    def robber (self, nums: List[int]) -> int:
        def dfs (i):
            if i >= len(nums):
                return 0
            return max(nums[i] + dfs(i + 2), dfs(i + 1))
        return dfs(0)
    
    # 2
    # Dynamic Programming: Top-Down
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def robber (self, nums: List[int]) -> int:
        memo = [-1] * len(nums)
        def dfs (i):
            if i >= len(nums):
                return 0
            if (memo[i] != -1):
                return memo[i]
            memo[i] = max(nums[i] + dfs(i + 2), dfs(i + 1))
            return memo[i]
        return dfs(0)
    
    # 3
    # Dynamic Programming: Bottom-Up
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def robber (self, nums: List[int]) -> int:
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]
        
        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range (2, len(nums)):
            dp[i] = max(dp[i - 1], nums[i] + dp[i - 2])

        return dp[-1]
    