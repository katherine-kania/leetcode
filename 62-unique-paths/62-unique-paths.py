class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # bottom row, which will be the length of the number of rows (n)
        # bottom row will be all 1's
        row = [1] * n
        
        # now loop through all the rows except the last one
        for i in range(m - 1):
            newRow = [1] * n
            # go through all positions except the right most collumn
            for j in range(n -2, -1, -1):
                # the right value + the old row
                newRow[j] = newRow[j + 1] + row[j]
            # old row set to the new row
            row = newRow
        # return the very first value
        return row[0]
        
        # O(n * m) O(n)