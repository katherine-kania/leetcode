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
    // initialise a new link list with a ListNode
    let newList = new ListNode(0)
    
    // Maintain a reference to the head of the new linked list
    let headOfNewList = newList
    
    // Whilst both of the passed in lists contain more elements
    while (list1 != null && list2 != null){
        // if list1 is smaller
        if (list1.val < list2.val){
            // add list1 to the new list
            newList.next = list1
            
            // move list1 to its next element
            list1 = list1.next
        } else {
            // add list2 to the new list 
            newList.next = list2
            
            // move list2 to its next element
            list2 = list2.next
        }
        
        // move into the next level of the linked list for the next iteration
        newList = newList.next
    }
    
    // if list 1 has run out of elements
    if (list1 == null){
        // append list 2
        newList.next = list2
    }
    // if list 2 has run out of elements
    else {
        // append list 1 to the new list
        newList.next = list1
    }
    return headOfNewList.next
        
};