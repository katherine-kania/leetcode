class Solution:
    def climbStairs(self, n: int) -> int:
        # dynamic programming solution
        # solve the base case and work up - bottom up approach
        one, two = 1,1 
        
        for i in range(n-1):
            temp = one
            one = one + two
            two = temp
        return one