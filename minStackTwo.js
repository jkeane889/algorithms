// Min Stack

/*
    *** Repeating this problem as its apart of LeetCode 30-Day Challenge ***

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

/*
    I - value to push onto the stack
    O - getMin returns smallest item in stack, and pop returns the last element added to stack
    C - time complexity (constant time) or linear?
    E - empty stack

*/

/*

    Initialize minStack with a size and an object

    MinStack.prototype.push
        add element "x" and set as size++

    MinStack.prototype.pop
        remove element from object with stack[size]

    MinStack.prototype.pop
        return element from object with stack[size]

    MinStack.prototype.getMin    
        set min variable equal to null

        iterate over Object.values(stack)
            if item < min
                min = item

        return min

*/

var MinStack = function() {
    this.stack = {}
    this.size = 0
};

MinStack.prototype.push = function(x) {
    this.size += 1
    this.stack[size] = x
};

MinStack.prototype.pop = function() {
    let temp = this.stack[size]
    delete this.stack[size]
    this.size -= 1
    return temp
};

MinStack.prototype.top = function() {
    return this.stack[size]
};

MinStack.prototype.getMin = function() {
    let min = null
    let values = Object.values(this.stack)

    for (let i = 0; i < values.length; i++) {
        if (!min) {
            min = values[i] 
        }

        if (values[i] < min) {
            min = values[i]
        }
    }

    return min
};
