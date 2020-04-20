// Construct Binary Tree from Preorder and Inorder Traversal

/*
    Given preorder and inorder traversal of a tree, construct the binary tree.

    Note:
    You may assume that duplicates do not exist in the tree.

    For example, given

    (root, left, right) preorder = [3,9,20,15,7] => [root, root, left]
    (left, root, right) inorder = [9,3,15,20,7]
  
    Return the following binary tree:

        3
       / \
      9  20
        /  \
       15   7

*/

/*
    I - pre-order and in-order arrays representing a binary tree's node values
    O - constructed binary tree (root node)
    C - linear time complexity to iterate through array ? O(log n) for recursive approach
    E - given an empty array (either or); missing nodes (leaves)

*/

/*
    Create a variable i

    Create a dfs inner recursive function

        if there is no root node
            Check to see if first value [i] from preOrder array, equals i + 1 in the in-order array
            if it does, shift off element from pre-order, splice (i + 1) element from in-order

        if rootNode does not have a left value
            if this element === shift element from inOrder array
                shift off element from preOrder and inOrder array and set it equal to node.left
            if it doesn't, call dfs on array and assign result to this.left

        if rootNode does not have a right value
            if this element === (i + 2) from inOrder array
                shift element off from preOrder and splice (i + 2) element from in-order
            if it doesn't, call dfs on array and assign result to this.right

*/

const buildTree = (preorder, inorder) => {
    if (!preorder.length || !inorder.length) {
        return null
    }

    const dfs = (p1, p2, i1, i2) => {
        if (p1 > p2 || i1 > i2) {
            return null
        }

        let value = preorder[p1]
        let index = inorder.indexOf(value)
        let nLeft = index - i1
        let node = new TreeNode(value)

        node.left = dfs(p1 + 1, p1 + nLeft, i1, index - 1)
        node.right = dfs(p1 + nLeft + 1, p2, index + 1, i2)

        return node
    }

    return dfs(0, preorder.length - 1, 0, inorder.length - 1)
};