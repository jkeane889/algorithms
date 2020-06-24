// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree

/*
    Given a binary tree where each path going from the root to any leaf form a valid sequence,
    check if a given string is a valid sequence in such binary tree. 

    We get the given string from the concatenation of an array of integers arr and the 
    concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

    Example 1:
        Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
        Output: true

        Explanation: 

        The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 

        Other valid sequences are: 
        0 -> 1 -> 1 -> 0 
        0 -> 0 -> 0

    Example 2:
        Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
        Output: false 
        
        Explanation: 
            The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.

    Example 3:
        Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
        Output: false
        
        Explanation: 
            The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.

    Constraints:

        1 <= arr.length <= 5000
        0 <= arr[i] <= 9
        Each node's value is between [0 - 9].

*/

/*
    I - root node of a binary tree and an array of binary integers
    O - boolean indicating whether a valid sequence exists in the binary tree that contains the elements
        of the given array
    C - time complexity of touching each element in the tree and the array (m + n) linear
    E - given an empty array; tree only contains a root node and no branches

*/

/*
    DFS recursion through tree

        Create a boolean variable initialized to false
        
        Create an inner recursive function
            
            base case: if !node.left && !node.right (leaf node)
                            if i === length of array and node's value === array[i]
                                set boolean variable to true
                                return
                            else
                                return

            recursive case:

                if node.val === array.val[i]

                    if node.left
                        recurse node.left, i++

                    if node.right
                        recurse node.right, i++

    return boolean variable
*/

const isValidSequence = function(rootNode, arr) {
    if (!rootNode || !arr.length) {
        return null
    }

    let isValid = false

    const checkValid = (node, i) => {
        if (!node.left && !node.right) {
            if (i === arr.length - 1 && node.val === arr[i]) {
                isValid = true
                return 
            } else {
                return
            }
        }

        if (node.val === arr[i]) {
            if (node.left) {
                checkValid(node.left, i += 1)
                i -= 1
            }

            if (node.right) {
                checkValid(node.right, i += 1);
            }
        }
    }   

    checkValid(rootNode, 0)
    return isValid
};