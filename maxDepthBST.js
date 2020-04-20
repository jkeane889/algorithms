// Maximum Depth of Binary Tree

/*
    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
    
    return its depth = 3.

*/

/*
    I - binary tree
    O - max depth of binary tree
    C - O log n time (ideal)
    E - no root node given, root does not have left or right nodes

*/

const getBtHeight = (rootNode, num) => {
    if (!rootNode) {
        return 0
    }

    if (!rootNode.right && !rootNode.left) {
        return num
    }

    if (rootNode.right && rootNode.left) {
        return Math.max(getBtHeight(rootNode.right, num + 1), getBtHeight(rootNode.left, num + 1))
    } else if (!rootNode.right) {
        return getBtHeight(rootNode.right, num + 1)
    } else {
        return getBtHeight(rootNode.left, num + 1)
    }
}

var maxDepth = function(root) {
    return getBtHeight(root, 1)
};