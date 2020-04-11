// Diameter of Binary Tree

/*
    Given a binary tree, you need to compute the length of the diameter of the tree. 
    The diameter of a binary tree is the length of the longest path between any two 
    nodes in a tree. 

    This path may or may not pass through the root.

    Example:
    Given a binary tree
             1
            / \
           2   3
          / \     
         4   5    
    
    Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

    Note: The length of path between two nodes is represented by the number of edges between them.

*/

/*
    I - a binary tree's root node
    O - longest path (integer) between nodes of tree 
    C - linear time complexity (must iterate over all nodes of tree?)
    E - no left or right node in root node
*/

/*
    DFS search of binary tree 

    Need to first furthest depth on right side and furthest depth on left side

    Then add both of these depths together to get greatest diameter

    Create variable for longestPath left
    Create variable for longestPath right

    Create inner recursive function

        base case: if !this.left && !this.right
                    if this traversal left && current depth > current LongestPath left
                        LongestPath left = current depth
                        current depth -= 1
                        return
                    else if this traversal right && current depth > current LongestPath right
                        LongestPath right = current depth
                        current depth -= 1
                        return
                    else 
                        return
        
        recursive case:

            if (this.left)
                if this is firstIteration going down left side
                    set default count parameter to zero and pass down leftSide traversal variable
                    recurse
                else
                    current count ++, and pass down side variable
                    recurse

            if (this.right)
                if this is firstIteration going down right side
                    set default count parameter to zero and pass down rightSide traversal variable
                    recurse
                else
                    current count ++, and pass down side variable
                    recurse
    
    if longestPath left && longestPath right
        return longestPathLeft + longestPath right
    else if longestPath left && !longestPathRight
        return longestPath left
    else if longestPath right && !longestPathleft
        return longestPath right

*/

var TreeNode = function(val) {
    this.val = val
    this.left = null
    this.right = null
}

const countDiameter = rootNode => {
    if (!rootNode) {
        return 0
    }

    return 1 + Math.max(countDiameter(rootNode.left), countDiameter(rootNode.right))
}

const diameterOfBinaryTree = rootNode => {
    if (!rootNode) {
        return 0
    }

    const center = countDiameter(rootNode.left) + countDiameter(rootNode.right)
    const left = diameterOfBinaryTree(rootNode.left)
    const right = diameterOfBinaryTree(rootNode.right)

    return Math.max(center, left, right)
}