// First Unique Number

/*
    You have a queue of integers, you need to retrieve the first unique integer in the queue.

    Implement the FirstUnique class:

    FirstUnique(int[] nums) Initializes the object with the numbers in the queue.

    int showFirstUnique() returns the value of the first unique integer of the queue, 
    and returns -1 if there is no such integer.
    
    void add(int value) insert value to the queue.  

    Example 1:

    Input: 
        ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
        [[[2,3,5]],[],[5],[],[2],[],[3],[]]
        
    Output: 
        [null,2,null,2,null,3,null,-1]

    Explanation: 
        FirstUnique firstUnique = new FirstUnique([2,3,5]);
        firstUnique.showFirstUnique(); // return 2
        firstUnique.add(5);            // the queue is now [2,3,5,5]
        firstUnique.showFirstUnique(); // return 2
        firstUnique.add(2);            // the queue is now [2,3,5,5,2]
        firstUnique.showFirstUnique(); // return 3
        firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
        firstUnique.showFirstUnique(); // return -1

    Example 2:

    Input: 
        ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
        [[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
        
    Output: 
        [null,-1,null,null,null,null,null,17]

    Explanation: 
        FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
        firstUnique.showFirstUnique(); // return -1
        firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
        firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
        firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
        firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
        firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
        firstUnique.showFirstUnique(); // return 17

    Example 3:

    Input: 
        ["FirstUnique","showFirstUnique","add","showFirstUnique"]
        [[[809]],[],[809],[]]
        
    Output:
        [null,809,null,-1]

    Explanation: 
        FirstUnique firstUnique = new FirstUnique([809]);
        firstUnique.showFirstUnique(); // return 809
        firstUnique.add(809);          // the queue is now [809,809]
        firstUnique.showFirstUnique(); // return -1

    Constraints:

    - 1 <= nums.length <= 10^5
    - 1 <= nums[i] <= 10^8
    - 1 <= value <= 10^8
    - At most 50000 calls will be made to showFirstUnique and add.

*/

/*
    I - an array of integers
    O - "showFirstUnique" will output the first unique integer from the given/updated queue
    C - time complexity of accessing unique element from queue
    E - given an empty queue; no unique integers in queue
*/

/*
    Create a linkedList to store elements of given queue object

        while queue.length
            shift off element from queue

            check to see if element exists in linkedList (iterate through nodes)

            if it doesn't exist
                add element to linkedList

            else, go onto next item in the queue

    Show First Unique

        get head value from LinkedList and return it
        if there is no head, return -1

    Add 

        Check to see if new element exists in LinkedList
            if it does, remove it
            else, add it

*/

var LinkedList = function(val) {
    this.head = new ListNode(val)
    this.tail = null
}

var ListNode = function(val) {
    this.val = val
    this.prev = null
    this.next = null
}

LinkedList.prototype.addToTail = function(val) {
    if (!this.head) {
        this.head = new ListNode(val)
    } else if (!this.tail) {
        this.tail = new ListNode(val)
        this.head.next = this.tail
        this.tail.prev = this.head
    } else {
        let oldTail = this.tail
        this.tail = new ListNode(val)
        oldTail.next = this.tail
        this.tail.prev = oldTail
    }
}

LinkedList.prototype.traverse = function(val) {
    let node = this.head
    let seen = false

    while (node) {
        if (node.val === val) {
            seen = true
            break
        } else {
            node = node.next
        }
    }

    return (seen) ? true : false 
}

LinkedList.prototype.delete = function(val) {
    let node = this.head

    while (node) {
        if (node.val === val) {
            if (!node.prev && !node.next) {
                this.head = null
                delete node
            } else if (!node.prev) {
                let tempNext = node.next
                tempNext.prev = null
                this.head = tempNext
                delete node
            } else {
                let tempPrev = node.prev
                let tempNext = node.next
                tempPrev.next = tempNext
                delete node
            }
            break
        } else {
            node = node.next
        }
    }
}

LinkedList.prototype.getFirstUnique = function() {
    if (this.head) {
        return this.head.val
    } else {
        return null
    }
}

var FirstUnique = function(nums) {
    if (!nums.length) {
        return null
    }

    this.uniqueLinkedList;

    for (let i = 0; i < nums.length; i++) {
        if (this.uniqueLinkedList === undefined) {
            this.uniqueLinkedList = new LinkedList(nums[i])
        } else {
            if (!this.uniqueLinkedList.traverse(nums[i])) {
                this.uniqueLinkedList.addToTail(nums[i])
            } else {
                this.uniqueLinkedList.delete(nums[i])
            }                        
        }
    }
};

FirstUnique.prototype.showFirstUnique = function() {
    let first = this.uniqueLinkedList.getFirstUnique()
    if (first) {
        return first
    } else {
        return -1
    }
};

FirstUnique.prototype.add = function(value) {
    if (!this.uniqueLinkedList.traverse(value)) {
        this.uniqueLinkedList.addToTail(value)
    } else {
        this.uniqueLinkedList.delete(value)
    }
};