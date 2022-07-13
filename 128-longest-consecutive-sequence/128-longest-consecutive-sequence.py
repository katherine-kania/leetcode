class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # sorting -> O(nlogn)
        # linear time solution O(n)
        
        numSet = set(nums)
        longest = 0
        
        for n in nums:
            #check if its the start of sequence
            if (n-1) not in numSet:
                length = 0
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest