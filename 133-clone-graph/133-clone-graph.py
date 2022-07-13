"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        #HashMap
        # old | 1 2 4 3
        # new | 1 2 4 3
        
        # single data structure > hashmap
        oldToNew = {}
        
        def clone(node):
            # is the node in our hashmap
            if node in oldToNew:
                #return that node
                return oldToNew[node]
            
            # create a copy of the node w/ node constructor
            copy = Node(node.val)
            #mapping the only node to the copy
            oldToNew[node] = copy
            # go through each neighbor
            for nei in node.neighbors:
                #take its list of neighbors and append to that list of neighbors
                copy.neighbors.append(clone(nei))
            return copy
    
        return clone(node) if node else None