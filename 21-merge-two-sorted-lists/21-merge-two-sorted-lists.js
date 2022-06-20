/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // if one of the lists are empty return the other
    if (list1 == null) return list2
    if (list2 == null) return list1
    
    // if list 1 is lower 
    if (list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    
    // if list 2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
        
};