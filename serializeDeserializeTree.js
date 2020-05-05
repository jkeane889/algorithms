// Serialize and Deserialize Binary Tree

/*
    Serialization is the process of converting a data structure or object into a sequence
    of bits so that it can be stored in a file or memory buffer, or transmitted across a 
    network connection link to be reconstructed later in the same or another computer environment.

    Design an algorithm to serialize and deserialize a binary tree. 
    There is no restriction on how your serialization/deserialization algorithm should work. 
    You just need to ensure that a binary tree can be serialized to a string and 
    this string can be deserialized to the original tree structure.

    Example: 

    You may serialize the following tree:

         1
        / \
       2   3
          / \
         4   5

    as "[1,2,3,null,null,4,5]"

    Clarification: The above format is the same as how LeetCode serializes a binary tree. 
                    You do not necessarily need to follow this format, so please be creative
                    and come up with different approaches yourself.

    Note: Do not use class member/global/static variables to store states. 
            Your serialize and deserialize algorithms should be stateless.

*/

/*
    I - either a rootNode of a binary tree, or data [serialization] representing a binary tree
    O - either rootNode of a binary tree, or data [serialization] representing a binary tree
    C - time complexity of BFS (linear) over each node of the tree (each element in the serialized array/string)
    E - representing a leaf node in the serialized version of string; a leaf node's representation in the tree

*/

/*
    Serialize using BFS

    serialize function(root)

        create an empty array to store node values

        create a queue and push rootNode into it

        while queue.length
            shift off element from queue

            add element's value to empty array

            if element has a left or a right
                add left into queue and right into queue

        return filled array of tree's values


    Deserialize using DFS

    deserialize function(data)

        Create a new Tree object
        
        Create inner recursive function that takes in array of values for tree nodes
            
            base case:  if !array.length
                            return

            recursive case:

                tree.val = array.shift()
                tree.left = recursive function
                tree.right = recursive function

        call inner recursive function

        return new Tree
*/

var TreeNode = function(val) {
    this.val = val;
    this.left = this.right = null;
};

var serialize = function(root) {
    if (!root) return [];
    
    const out = [];
    
    const bfs = [root];
    
    while (bfs.length) {
        const current = bfs.shift();
        
        if (!current)  {
            out.push(null);
            continue;
        }
        
        const { val, left, right } = current;
        
        out.push(val);
        
        bfs.push(left);
        bfs.push(right);
    }
            
    return out;
};

var deserialize = function(data) {
    if (!data.length) return null;
    
    const head = new TreeNode(data.shift());
    const bfs = [head];
    
    while (data.length && bfs.length) {
        const current = bfs.shift();
                        
        const left = data.shift();
        const right = data.shift();
        
        current.left = Number.isInteger(left) ? new TreeNode(left) : null;
        current.right = Number.isInteger(right) ? new TreeNode(right) : null;
        
        if (current.left !== null) bfs.push(current.left);
        if (current.right !== null) bfs.push(current.right);
    }
        
    return head;
};