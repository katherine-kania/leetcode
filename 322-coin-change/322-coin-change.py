class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # dynamic programing solution - Bottom - up
        # top to down
        # DP[0] = 0 
        # DP[1] = 1
        # DP[2] = 1 + DP[1]
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        
        for a in range(1, amount + 1):
            for c in coins:
                if a - c >= 0:
                    dp[a] = min(dp[a], 1 + dp[a - c])
                    
        return dp[amount] if dp[amount] != amount + 1 else -1