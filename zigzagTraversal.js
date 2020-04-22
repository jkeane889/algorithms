// Binary Tree Zigzag Level Order Traversal

/*
    Given a binary tree, return the zigzag level order traversal of its nodes' values. 
    (ie, from left to right, then right to left for the next level and alternate between).

    For example:
    
    Given binary tree [3,9,20,null,null,15,7],
         3
        / \
       9  20
         /  \
        15   7
    
    return its zigzag level order traversal as:
    
    [
        [3],
        [20,9],
        [15,7]
    ]

*/

/*
    I - rootNode of binary tree
    O - array of arrays storing node's values in varied order (left/right, right/left)
    C - linear time (touching each node in tree)
    E - given an empty tree (only root has a value); given no tree

*/

/*
    Create a storage array to store tree's node values

    DFS Traversal algorithm

        Create inner recursive function with parameters node and iteration type

            if !storageArray.length
                push [root.val] into storage array
            
            depending on iteration, visit either right or left node first and push its value into an array

            if iteration === zig

                creat temp storage array
                
                if node.right && node.left
                    storage.array.push(node.right.val)
                    storage.array.push(node.left.val)
                    push storage array into global storage

                dfs(node.right, zag)
                dfs(node.left, zag)

            if iteration === zag
                
                creat temp storage array
                
                if node.right && node.left
                    temp storage.array.push(node.left.val)
                    temp storage.array.push(node.right.val)
                    push storage array into global storage
                else if node.right
                    temp storage.array.push(node.right.val)

                dfs(node.right, zig)
                dfs(node.left, zig)

*/

// FIRST ATTEMPT 

const zigzagLevelOrder = rootNode => {
    let nodes = []

    if (!rootNode) {
        return nodes
    }

    const zigZagNodes = (node, level, direction) => {
        if (!nodes.length) {
            nodes.push([node.val])
        }

        if (!node.left && !node.right) {
            return
        }

        if (direction === "zig") {
            let tempArr = []

            if (node.left && node.right) {
                tempArr.push(node.right.val, node.left.val)
                nodes.push(tempArr)
                zigZagNodes(node.left, "zag")
                zigZagNodes(node.right, "zag")
            } else if (node.left && !node.right) {
                tempArr.push(node.left.val)
                nodes.push(tempArr)
                zigZagNodes(node.left, "zag")
            } else if (!node.left && node.right) {
                tempArr.push(node.right.val)
                nodes.push(tempArr)
                zigZagNodes(node.right, "zag")
            }

        } else if (direction === "zag") {
            let tempArr = []

            if (node.left && node.right) {
                tempArr.push(node.left.val, node.right.val)
                nodes.push(tempArr)
                zigZagNodes(node.left, "zig")
                zigZagNodes(node.right, "zig")
            } else if (node.left && !node.right) {
                tempArr.push(node.left.val)
                nodes.push(tempArr)
                zigZagNodes(node.left, "zig")
            } else if (!node.left && node.right) {
                tempArr.push(node.right.val)
                nodes.push(tempArr)
                zigZagNodes(node.right, "zig")
            }
        }
    }

    zigZagNodes(rootNode, 0, "zig")
    return nodes
};