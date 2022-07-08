class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # result output array with an intial value of 1
        result = [1] * (len(nums))
        
        prefix = 1
        for i in range(len(nums)):
            result[i] = prefix
            prefix *= nums[i]
          
        postfix = 1
         #start at the end of the array 
        for i in range(len(nums) -1, -1, -1):
            # multiply the existing results from prefix with postfix
            result[i] *= postfix
            postfix *= nums[i]
        return result