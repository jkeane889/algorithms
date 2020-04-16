// Odd Even Linked List

/*
    Given a singly linked list, group all odd nodes together followed by the even nodes. 
    Please note here we are talking about the node number and not the value in the nodes.

    You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

    Example 1:

    Input: 1->2->3->4->5->NULL
    Output: 1->3->5->2->4->NULL
    
    Example 2:

    Input: 2->1->3->5->6->4->7->NULL
    Output: 2->3->6->7->1->5->4->NULL
    
    Note:
    - The relative order inside both the even and odd groups should remain as it was in the input.
    - The first node is considered odd, the second node even and so on ...

*/

/*
    I - singly linked list
    O - updated list with all odd nodes (by placement) first and then followed by all even nodes
    C - O(1) space complexity and O(n) time complexity
    E - only single head node, empty linkedList

*/

/*
    Create a count variable initialized to one (representing head node)
    head = Store list.head as the first node
    node = Store list.head as the first node
    let evenNext;

    while (node) {
        count += 1

        
    }
    
*/

var ListNode = function(val) {
    this.val = val
    this.next = null
};

const oddEvenList = head => {
    if (head === null || head.next === null) {
        return head
    }

    // Create reference to original head node
    let oddHead = head
    // Create odd as reference to oddHead node
    let odd = oddHead // 1 -> 2 -> 3 -> 4 -> 5

    // Create reference to original head node
    let evenHead = head.next
    // Create even as reference to evenHead node
    let even = evenHead // 2 -> 3 -> 4 -> 5

    // While node and node.next !== null for any of the above nodes
    while (odd !== null && odd.next !== null && even !== null && even.next !== null) {
        odd.next = even.next // 1 -> 3 -> 5
        odd = odd.next // 5
        even.next = odd.next // 2 -> 4 -> null
        even = even.next // null
    }

    odd.next = evenHead; // 5 -> 2
    head = oddHead // 1 -> 3 -> 5 -> 2 -> 4

    return head
};

var newList = new ListNode(1)
var node1 = new ListNode(2)
newList.next = node1
var node2 = new ListNode(3)
node1.next = node2
var node3 = new ListNode(4)
node2.next = node3
var node4 = new ListNode(5)
node3.next = node4;

console.log(oddEvenList(newList));