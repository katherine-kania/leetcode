class Solution:
    def twoSum(self, arr, target):
        # use pythons dictionary to map a compiment to the index of the vaue it corresponds to 
        values = dict()
        # then use a for loop to map through the elements in the array
        for i, elem in enumerate(arr):
            comp = target - elem
            if comp in values:
                return [values[comp], i]
            values[elem] = i
        # if no match
        return []