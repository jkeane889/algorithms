// Average of Levels in Binary Tree

/*

    Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
    
    Example 1:

        Input:
            3
           / \
          9  20
            /  \
           15   7

        Output: [3, 14.5, 11]

    Explanation:

    The average value of nodes on level 0 is 3,  on level 1 is 14.5, 
    and on level 2 is 11. Hence return [3, 14.5, 11].

*/

/*
    I - root node of a binary tree
    O - array with average value of node's from each level in tree
    C - time complexity (linear), having to touch each node and corresponding value in tree
    E - leaf node

*/

/*
    Breadth-first Traversal of binary tree
    
    Create global array to hold averages of each level

    Create a queue to store the node's of each level

        Initialize queue with current rootNode

        while queue has a length
            dequeue node from queue and set equal to temp variable
            if temp variable has a leftNode or a RightNode
                push leftNode and RightNode into queue
                create average variable = leftNode.val + rightNode.val / 2
                push average into globalAverage array
        
    return globalArr of average level values

*/

const averageOfLevels = root => {
    if (!root) {
        return
    }

    let queue = [root]
    let averages = []

    while (queue.length) {
        let size = queue.length
        let sum = 0;

        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            sum += node.val
            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        averages.push(sum / size)
    }

    return averages
};


