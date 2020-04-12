// Last Stone Weight

/*
    We have a collection of stones, each stone has a positive integer weight.

    Each turn, we choose the two heaviest stones and smash them together.
    Suppose the stones have weights x and y with x <= y.  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

    Example 1:

    Input: [2,7,4,1,8,1]
    Output: 1

    Explanation: 
    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

    Note:

    1 <= stones.length <= 30
    1 <= stones[i] <= 1000

*/

/*
    I - array of positive integers representing stone weights
    O - return remaining weight of array (1 or 0) after smashing process
    C - log (n) & O(1) with binary heap
    E - all stones are equivalent, empty array given (no weights in array)
*/

/*
    Create a maxHeap (with top most value as root node)
        check root.left && root.right (which should be the next most weighted stones)
        select greater of the two

        create a temporary variable to be stored that subtracts the greatest from next
        largest node

        Based on temporary variables value, resort Max heap and store temp variable
        as a new value in heap

        continue this process for each value in heap until rootNode is the only
        thing remaining (base case?)
*/

var maxHeap = function() {
    this.heap = []
}

maxHeap.prototype.insert = function(node) {
    this.heap.push(node)

    if (this.heap.length > 1) {
        let currentPos = this.heap.length - 1

        while (currentPos > 0 && this.heap[currentPos - 1] < this.heap[currentPos]) {
            [this.heap[currentPos], this.heap[currentPos - 1]] = [this.heap[currentPos - 1], this.heap[currentPos]]
            currentPos -= 1
        }
    }
};

const lastStoneWeight = stones => {
    let newHeap = new maxHeap()
    
    for (let i = 0; i < stones.length; i++) {
        newHeap.insert(stones[i])
    }

    while (newHeap.heap.length > 1) {
        let heaviest = newHeap.heap.shift()
        let secHeaviest = newHeap.heap.shift()

        let remainder = heaviest - secHeaviest;
        newHeap.insert(remainder)
    }

    return newHeap.heap.shift()
};
