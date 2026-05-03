class Solution:
    @staticmethod
    def contains_duplicate(nums):
        return len(nums) != len(set(nums))