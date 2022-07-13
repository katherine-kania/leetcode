class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # DP and Greedy solutions
        
        # goal will be at the end of the length of numbers -1
        goal = len(nums) -1
        
        #starting with the last index 
        for i in range(len(nums) -1, -1, -1):
            # + num[i] is the jump 
            if i + nums[i] >= goal:
                #update the goal to i, i is the postion we will be jumping from
                goal = i 
        
        return True if goal == 0 else False