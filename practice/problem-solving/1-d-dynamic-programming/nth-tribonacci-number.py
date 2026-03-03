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
