// Middle of the Linked List

/*
    Given a non-empty, singly linked list with head node head, return a middle node of linked list.

    If there are two middle nodes, return the second middle node.

    Example 1:

    Input: [1,2,3,4,5]
    Output: Node 3 from this list (Serialization: [3,4,5])

    The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
    Note that we returned a ListNode object ans, such that:
    ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

    Example 2:

    Input: [1,2,3,4,5,6]
    Output: Node 4 from this list (Serialization: [4,5,6])

    Since the list has two middle nodes with values 3 and 4, we return the second one. 

    Note: The number of nodes in the given list will be between 1 and 100.

*/

/*
    I - head of singly linkedList
    O - value of middle node in linkedList, or second value at middle of linkedList
    C - linear time complexity to iterate over nodes in list
    E - linkedList with only head node

*/

/*

    Create variable that stores length of LinkedList
    Create variable equal to middle node initialized to null

    Iterate over linkedList and if there is a node, add 1 to count of LinkedList
        if count % 2    
            get midValue of LinkedList by dividing count by 2 (math.floor)
        else
            get midValue of LinkedList by dividing count by 2 (math.ceiling)
    
    Iterate back over linkedList and reset count to zero
        if node and count equals midValue
            return node.value

*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var middleNode = function(head) {
    let count = 0
    let midValue = 0
    let node = head
    let nodes = []

    while (node) {
        count += 1
        node = node.next
    }

    if (count % 2 !== 0) {
        midValue = Math.ceil(count / 2)
        count = 0
        node = head
    } else {
        midValue = Math.floor(count / 2) + 1
        count = 0
        node = head
    }

    while (node) {
        count += 1
        if (count >= midValue) {
            if (!nodes.length) {
                let newHead = new ListNode(node.val)
                nodes.push(newHead)
            } else {
                let currentTail = nodes[nodes.length - 1]
                let newNode = new ListNode(node.val)
                currentTail.next = newNode
                nodes.push(newNode)
            }
            node = node.next
        } else {
            node = node.next
        }
    }

    return nodes.shift()
};

let node1 = new ListNode(1)
let node2 = new ListNode(2)
node1.next = node2
let node3 = new ListNode(3)
node2.next = node3
let node4 = new ListNode(4)
node3.next = node4
let node5 = new ListNode(5)
node4.next = node5
let node6 = new ListNode(6)
node5.next = node6

console.log(middleNode(node1));