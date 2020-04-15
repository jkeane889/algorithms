// Merge Two Sorted Lists

/*
    Merge two sorted linked lists and return it as a new list. 
    The new list should be made by splicing together the nodes of the first two lists.

    Example:

    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4

*/

const mergeTwoLists = (l1, l2) => {
    // Creating a new head for a new LinkedList
    let mergedHead = { val: -1, next: null}
    let copy = mergedHead;

    // Check if list1 and list2 nodes' exist
    while (l1 && l2) {
        // if l1 node's value > l2 node's value
        if (l1.val > l2.val) {
            // make copied linkedList's next equal to lesser l2 node
            copy.next = l2
            // set l2 equal to it's next value
            l2 = l2.next
        } else {
            // make copied linkedList's next equal to lesser l1 node
            copy.next = l1
            // set l1 equal to it's next value
            l1 = l1.next
        }

        // make copy equal to it's next node, which is either the head of
        //  l1 or l2
        copy = copy.next
    }

    copy.next = l1 || l2;
    // return the next value of mergedHead, which is the head value of either l1 or l2
    return mergedHead.next
}