class Solution:
    # 1
    # Hash Set
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    def hasDuplicate (self, nums: List[int]) -> int:
        seen = set()
        for num in nums:
            if (num in seen):
                return True
            seen.add(num)
        return False