// 101. Symmetric Tree

/*
    Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

    For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
    

    But the following [1,2,2,null,3,null,3] is not:

        1
       / \
      2   2
       \   \
       3    3
    

    Follow up: Solve it both recursively and iteratively.

*/

/*
    I - root node of binary tree
    O - boolean indicating whether the tree is symmetric on both sides (around root)
    C - time complexity (log n)
    E - missing left/right on either side when there should be a corresponding node
        based on opposite side of tree
*/

/*
    BFS search

    Create helper function that takes in queue array
        create boolean to represent if symmetrical    

        while queueArr has length
            set variable equal to middle value of queue

            get floored mid value of array
            get ceiling mid value of array

            if floored === ceiling
                splice away both values
            else
                boolean equals
                false

        return boolean

    Create a queue to store nodes of tree at each level
    create global boolean to represent if trees are symmetric    

    push root node into queue

    while queue.length

        shift off node from queue
        if this node has a left and a right branch
            push node.left and node.right into queue
            call helper function and pass in queue
            if returned value === false
                return false
            else
                continue
*/

const sameTree = (left, right) => {
    if (!left && !right) {
        return true
    }

    if (!left || !right || right.val !== left.val) {
        return false
    }

    return sameTree(left.left, right.right) && sameTree(left.right, right.left)
}

const isSymmetric = root => {
    if (!root) return true
    return sameTree(root.left, root.right)

};