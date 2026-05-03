from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # indexed key represents count
        # value is a list of numbers with that count
        # [1, 1, 1, 2, 2, 100]
        # i (count) [0, 1, 2, 3, 4, 5, 6, 7 , 8]
        # values    [[],[100], [2], [1], [] [], [], []]
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
        
        return res
        

