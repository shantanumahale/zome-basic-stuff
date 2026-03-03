class Solution:
    # 1
    # Recursion
    # Time Complexity: O(3^n)
    # Space Complexity: O(n)
    def tribonacci (self, n: int) -> int:
        if (n <= 2):
            if (n != 0):
                return 1
            else:
                return 0
        return self.tribonacci(n - 1) + self.tribonacci(n - 2) + self.tribonacci(n - 3)

class Solution:
    # 2
    # Dynamic Programming: Top-Down
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def __init__(self):
        self.dp = {}

    def tribonacci (self, n: int) -> int:
        if (n <= 2):
            if (n != 0):
                return 1
            else:
                return 0
        if (n in self.dp):
            return self.dp[n]
        
        self.dp[n] = self.tribonacci(n - 1) + self.tribonacci(n - 2) + self.tribonacci(n - 3)
        return self.dp[n]
    
class Solution:
    # 3
    # Dynamic Programming: Bottom-Up
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def tribonacci (self, n: int) -> int:
        if (n <= 2):
            return 1 if n != 0 else 0
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 1
        for i in range (3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
        return dp[n]
    
class Solution:
    # 4
    # Dynamic Programming: Space Optimized
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    def tribonacci (self, n: int) -> int:
        t = [0, 1, 1]
        if (n < 3):
            return t[n]
        for i in range (3, n + 1):
            t[i % 3] = sum(t)
        return t[n % 3]



