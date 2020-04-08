// Intersection of Two Linked Lists

/*
    Write a program to find the node at which the intersection of two singly linked lists begins.

    For example, the following two linked lists:

            a1 -> a2 
                    \
                    c1 -> c2 -> c3
                    /
      b1 -> b2 -> b3


    begin to intersect at node c1.


    Notes:

    - If the two linked lists have no intersection at all, return null.
    - The linked lists must retain their original structure after the function returns.
    - You may assume there are no cycles anywhere in the entire linked structure.
    - Your code should preferably run in O(n) time and use only O(1) memory.

*/

/*
    I - heads of both linkedLists
    O - reference to node value where linkedLists collide
    C - linear time O(n) with O(1) space complexity
    E - linkedLists that have no intersection at all returns null

*/

/*
    Find out which list is the longer of the two
    
        Create a helper function to iterate over linkedList and provide a count
        of the number of nodes in list

            set count variable equal to 0

            while node
                count++

            return count
        
        Create function to compare linkedLists

            count1 = call helper function on linkedList1
            count2 = call helper function on linkedList2

            if (count1 > count2)

                set variable equal to newCount

                while 0 < newCount
                    iterate through linkedList

                    when i === newCount

                    begin looking at both lists simultaneously and compare values to see if there are 
                    any shared common values

*/  

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) {
        return null
    }

    let nodeA = headA;
    let nodeB = headB;

    while (nodeA && nodeB && nodeA !== nodeB) {
        nodeA = nodeA.next
        nodeB = nodeB.next

        if (nodeA === nodeB) {
            return nodeA
        }

        if (!nodeA) {
            nodeA = headA
        }

        if (!nodeB) {
            nodeB = headB
        }
    }

    return nodeA
};

var ListNode = function(value) {
    this.val = value
    this.next = null
};

ListNode.prototype.addToTail = function(value) {
    let newTail = new ListNode(value);
    this.next = newTail
};