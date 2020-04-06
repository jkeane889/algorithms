// Delete Node in a Linked List

/*
    Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

    Given linked list -- head = [4,5,1,9], which looks like following:

    4 -> 5 -> 1 -> 9

    Input: head = [4,5,1,9], node = 5
    Output: [4,1,9]
    
    Explanation: You are given the second node with value 5,
    the linked list should become 4 -> 1 -> 9 after calling your function.

    The linked list will have at least two elements.
    All of the nodes' values will be unique.
    The given node will not be the tail and it will always be a valid node of the linked list.
    Do not return anything from your function.

*/

/*
    I - head of a linkedList, and node value to be deleted
    O - updated linkedList with node having been deleted
    C - linear time complexity
    E - linkedList does not contain value, linkedList only has head value (length of 0 or 1)

*/

/*

    Start with head of linkedList

    Traverse list with a while loop
        if a node's next value equals node with value
            let current node's .next value equal to node.next.next
            make node = node.next
        then iterate to next node with value
            set a temporary variable equal to node's next value
            delete current node
            set current node = temp variable
    
*/

var deleteNode = function(node) {
    let temp = node.next
    node.val = temp.val
    node.next = temp.next
    delete node
};
