// Invert Binary Tree

/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

/*

    I - ordered binary tree with a root node
    O - inverted binary tree with greater values to the left and lower values to the right
    C - time complexity of searching and replacing each node in the tree (linear)
    E - leaf node (no leaf and right values)

*/

/*
    Recursive Traversal of Tree

    Base case: if !this.left && !this.right
                    return

    Recursive case:
        
        if this.left && this.right
            this.right = this.left
            this.left = this.right
            call traversal on this.left
            call traversal on this.right

*/

const invertTree = root => {
    let originalTree = root

    const invert = rootNode => {
        if (!rootNode) {
            return rootNode
        }

        let temp = rootNode.right;
        rootNode.right = rootNode.left;
        rootNode.left = temp
        invert(rootNode.left)
        invert(rootNode.right)
        return rootNode
    }

    return invert(originalTree)
};
