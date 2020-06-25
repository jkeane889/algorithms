// Print Binary Tree

/*
    Print a binary tree in an m*n 2D string array following these rules:

    The row number m should be equal to the height of the given binary tree.

    The column number n should always be an odd number.

    The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.

    Each unused space should contain an empty string "".

    Print the subtrees following the same rules.

    Example 1:

    Input:
         1
        /
       2

    Output:
    [["", "1", ""],
    ["2", "", ""]]

    Example 2:

    Input:
        1
       / \
      2   3
       \
        4
    
    Output:
    [["", "", "", "1", "", "", ""],
    ["", "2", "", "", "", "3", ""],
    ["", "", "4", "", "", "", ""]]

    Example 3:

    Input:
         1
        / \
       2   5
      / 
     3 
    / 
   4 

    Output:

    [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
    ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
    ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
    ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

    Note: The height of binary tree is in the range of [1, 10].


    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/**
 * @param {TreeNode} root
 * @return {string[][]}
*/

/*
    I - binary tree with varied branch sizes
    O - matrix of arrays representing the tree and its values
    C - time complexity of visiting each node in a tree recursively is linear
    E - imbalanced binary tree; only root note given

    Pseudocode

    DFS Recursion

    Base Case: if you've reached a leaf node, return

    - As you are traversing the tree, keep a count recording the depth/height of the tree
        - if the height is odd, you are printing that many empty quotes around root node
        - if the height is even, you are printing double the height and then the root node
        - need to get the max height

    - Once we get to the max height, we want to construct the matrix knowing the max height

    - Then we split the true down the middle, and using BFS, add nodes evenly across each
    node until the end

*/

const getMaxHeight = (node) => {
    if (node === null) {
        return 0
    }
    const left = getMaxHeight(node.left)
    const right = getMaxHeight(node.right)
    return Math.max(left, right) + 1
}

const connect = (node, arr, row, column) => {
    arr[row][column] = `${node.val}`;
    let diff = 2 ** (arr.length - row - 2)
    node.left && connect(node.left, arr, row + 1, column - diff)
    node.right && connect(node.right, arr, row + 1, column + diff)
}

const printTree = (rootNode) => {
    const height = getMaxHeight(rootNode)
    const count = (2 ** height) - 1
    const result = []
    for (let i = 0; i < height; i++) {
        result.push(new Array(count).fill(""))
    }
    connect(rootNode, result, 0, Math.floor(count / 2))
    return result
};

const TreeNode = function(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}