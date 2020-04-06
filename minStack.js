// Min Stack

/*
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.  

    Example:

    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> Returns -3.
    minStack.pop();
    minStack.top();      --> Returns 0.
    minStack.getMin();   --> Returns -2.

*/

/**
 * initialize your data structure here.
 */

var MinStack = function() {
    let minStack = {}
    minStack.size = 0
    minStack.top = null
    return minStack    
};

/** 
 * @param {number} x
 * @return {void}
 */

var MinStack = function() {
    this.stack = {}
    this.size = 0
};

MinStack.prototype.push = function(x) {
    this.size += 1
    this.stack[this.size] = x
};

MinStack.prototype.pop = function() {
    let poppedVal = this.stack[this.size]
    delete this.stack[this.size]
    this.size -= 1
    return poppedVal
};

MinStack.prototype.top = function() {
    return this.stack[this.size]
};

MinStack.prototype.getMin = function() {
    let values = Object.values(this.stack)
    let min;

    for (let i = 0; i < values.length; i++) {
        if (min === undefined) {
            min = values[i]
        } else {
            if (values[i] < min) {
                min = values[i]
            }
        }
    }

    return min
};
