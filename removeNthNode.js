// Remove Nth Node From End of List


/*

    Given a linked list, remove the n-th node from the end of list and return its head.

    Example:

    Given linked list: 1->2->3->4->5, and n = 2.

    After removing the second node from the end, the linked list becomes 1->2->3->5.
    Note:

    Given n will always be valid.

    Follow up:

    Could you do this in one pass?

*/

/*
    I - linkedList's head Node and nth node position from end of list
    O - return head node of updated linked list
    C - O(n) time complexity
    E - "nth" node is greater than length of linkedList; linkedList is empty

*/

/*
    Walk & Run LinkedList Traversal Method
    
    let listLength = 0
    let walkNode = 0
    let deleteNode;
    create walker = head.next

    while (walker) {
        let runner = walker.next // head.next.next 
        walkNode += 1
        if runner {
            listLength += 3
            walker = walker.next
        }

        if (!runner) {
            targetNode = listLength - n            
        }

        walker = walker.next
        walkNode += 1
        if (walkNode === targetNode) {
            delete targetNode
        }
    }

    return head
*/

const removeNthFromEnd = (head, n) => {
    var start = new ListNode(0);
    start.next = head;
    
    var i = 0,
        fast = start,
        slow = start;
        
    while(i <= n && fast !== null){
        fast = fast.next;
        i++;
    }
    
    while(fast !== null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return start.next;
};

let newList = LinkedList();
newList.addToTail(2)
newList.addToTail(3)
newList.addToTail(4)
newList.addToTail(5)


