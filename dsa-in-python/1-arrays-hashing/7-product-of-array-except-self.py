from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #           [1,  2,  3,  4]
        # Prefix  1 [1,  2,  6, 24]
        # Postfix   [24, 24, 12, 4] 1
        # Output    [24, 12,  8, 6]
        # O(n) space complexity

        # O(1) space complexity
        # PrefixRes Pre = 1  [1,  1,  2,  6]
        # PostfixRes [24, 12, 8,  6] Post = 1
        # iterations: (post)1 * 6 = 6, (post)1*4 * 2 = 8, (post)1*4*3 * 1 = 12, (post)1*4*3*2 * 1 = 24
        res = [1] * (len(nums))

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
        return res


