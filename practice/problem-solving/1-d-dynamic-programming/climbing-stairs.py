class Solution:
    # 1
    # Recursion
    # Time Complexity: O(2^n)
    # Space Complexity: O(n)
    def climbStairs (self, n: int) -> int:
        def dfs (i):
            if (i == n):
                return 1
            if (i > n):
                return 0
            return dfs(i + 1) + dfs(i + 2)
        
        return dfs(0)
    
    # 2
    # Dynamic Programming: Top-Down
    # Time Complexity: O(n)
    # Space Complexity O(n)
    def climbStairs (self, n: int) -> int:
        cache = [-1] * n
        def dfs (i):
            if (i == n):
                return 1
            if (i > n):
                return 0
            if (cache[i] != -1):
                return cache[i]
            cache[i] = dfs(i + 1) + dfs(i + 2)
            return cache[i]
        return dfs(0)
    
    # 3
    # Dynamic Programming: Bottom-Up
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def climbStairs (self, n: int) -> int:
        if (n <= 2):
            return n
        dp = [0] * (n+1)
        dp[1] = 1
        dp[2] = 2
        for i in range (3, n+1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
    
    # 4
    # Dynamic Programming: Space Optimized
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    def climbStairs (self, n: int) -> int:
        one = 1
        two = 2
        for i in range(n - 1):
            temp = one
            one = one + two
            two = temp
        return one
    
    # 5
    # Matrix Exponentiation
    # Time Complexity: O(log n)
    # Space Complexity: O(1)
    def climbStairs (self, n: int)-> int:
        if (n == 1):
            return 1
        
        def matrixMultiply (A, B):
            return(
                [
                    [
                        [A[0][0] * B[0][0] + A[0][1] * B[1][0]],
                        [A[0][0] * B[0][1] + A[0][1] * B[1][1]]
                    ],
                    [
                        [A[1][0] * B[0][0] + A[1][1] * B[1][0]],
                        [A[1][0] * B[0][1] + A[1][1] * B[1][1]]
                    ]
                ]
            )
        def matrixPow (M, p):
            result = [[1, 0], [0, 1]]
            base = M
            while p:
                if p % 2 == 1:
                    result = matrixMultiply(result, base)
                base = matrixMultiply(base, base)
                p //= 2
            return result
        M = [[1, 1], [1, 0]]
        result = matrixPow(M, n)
        return result[0][0]
    
    # 6
    # Math
    # Time Complexity: O(log n)
    # Space Complexity: O(1)
    def climbStairs (self, n: int) -> int:
        sqrt5 = math.sqrt(5)
        phi = (1 + sqrt5) / 2
        psi = (1 + sqrt5) / 2
        n += 1
        return round(((phi**n) - (psi**n)) / sqrt5)



    


    


    

    
