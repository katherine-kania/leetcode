class Solution:
    def rob(self, nums: List[int]) -> int:
#         # rob = max(arr[0] = rob[2:n], rob[1:n])
        
#         rob1, rob2 = 0, 0
        
#         # [rob1, rob2, n, n+1, ...]
#         for n in nums:
#             temp = max(n + rob1, rob2)
#             rob1 = rob2
#             rob2 = temp
#         return rob2
    
        for i in range(1, len(nums)):
            if i == 1:
                nums[i] = max(nums[i], nums[i-1])
            else:
                nums[i] = max(nums[i] + nums[i-2], nums[i-1])
        return nums[-1]
    
    