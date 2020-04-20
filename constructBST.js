// Construct Binary Search Tree from Preorder Traversal

/*

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, 
any descendant of node.left has a value < node.val, and any descendant of node.right 
has a value > node.val.  

Also recall that a preorder traversal displays the value of the node first, 
then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]

Output:
            8
           / \
          5   10
         / \   \
        1   7  12

*/

/*
    I - array of unsorted integers that are distinct (non-duplicates) in pre-order traversal
    O - root node of a binary search tree
    C - linear time complexity over array traversal and constant time/space to create corresponding nodes
    E - given an empty array; given negative values in array (how to handle?)

*/

/*
    Create global variable called root

    Create inner recursive function to create binary search tree pass in tree node
        
        if !root.val
            root = tree node from shifting first element from array
            
        if !root.left && next element in array < root.val
            root.left = recurse(array)
        
        if !root && next element in array > root.val
            root.right = recurse(array)

    return root

*/

// ORIGINAL ATTEMPT

// const bstFromPreorder = preorder => {
//     if (!preorder.length) {
//         return null
//     }

//     let rootNode;

//     const createBST = (node, array, iteration, rootVal) => {
//         if (iteration === "root" && !node && array.length === 1) {
//             return new TreeNode(array.shift())
//         } else if (iteration === "root" && !node) {
//             rootNode = new TreeNode(array.shift())
//         }

//         if (iteration === "root") {
//             if (!rootNode.left && array[0] < rootNode.val) {
//                 rootNode.left = new TreeNode(array.shift())
//             } 

//             createBST(rootNode.left, array, iteration = "left", rootNode.val)
            
//             if (!rootNode.right && array[0] > rootNode.val) {
//                 rootNode.right = new TreeNode(array.shift())
//             }
            
//             createBST(rootNode.right, array, iteration = "right", rootNode.val)

//             return rootNode
//         }

//         if (iteration === "left") {
//             if (!node.left && array[0] < node.val && array[0] < rootVal) {
//                 node.left = new TreeNode(array.shift())
//             } else if (node.left && array[0] < node.val && array[0] < rootVal) {
//                 createBST(node.left, array, iteration = "left", rootVal)
//             }

//             if (!node.right && array[0] > node.val && array[0] < rootVal) {
//                 node.right = new TreeNode(array.shift())
//             } else if (rootNode.right && array[0] > node.val && array[0] < rootVal) {
//                 createBST(rootNode.right, array, iteration = "left", rootVal)
//             }
//         }

//         if (iteration === "right") {
//             if (!node.left && array[0] < node.val && array[0] > rootVal) {
//                 node.left = new TreeNode(array.shift())
//             } else if (node.left && array[0] < node.val && array[0] > rootVal) {
//                 createBST(node.left, array, iteration = "right", rootVal)
//             }

//             if (!node.right && array[0] > node.val && array[0] > rootVal) {
//                 node.right = new TreeNode(array.shift())
//             } else if (rootNode.right && array[0] > node.val && array[0] > rootVal) {
//                 createBST(rootNode.right, array, iteration = "right", rootVal)
//             }
//         }
//     }

//     let newRoot = createBST(null, preorder, iteration = "root", null)
//     return newRoot
// };

// SOLUTION CODE

const bstFromPreorder = preorder => {
    if (!preorder.length) {
        return null
    }

    let i = 0;

    const createBST = (array, min, max) => {
        if (i >= array.length) {
            return null
        }

        if (array[i] < min || array[i] > max) {
            return null
        }

        let node = new TreeNode(array[i])
        i++
        node.left = createBST(array, min, node.val)
        node.right = createBST(array, node.val, max)

        return node
    }

    return createBST(preorder, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};