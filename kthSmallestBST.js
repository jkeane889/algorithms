// Kth Smallest Element in a BST

/*
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

    Note:
    You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

    Example 1:

    Input: root = [3,1,4,null,2], k = 1
     
        3
       / \
      1   4
       \
        2

    Output: 1
    
    Example 2:

    Input: root = [5,3,6,2,4,null,null,1], k = 3
            5
           / \
          3   6
         / \
        2   4
       /
      1
 
    Output: 3
 
    Follow up:
    What if the BST is modified (insert/delete operations) often and you need \
    to find the kth smallest frequently? How would you optimize the kthSmallest routine?

*/

/*
    I - a binary search tree
    O - the "Kth" smallest element within BST
    C - linear time complexity (having to touch each node in the tree)
    E - k > length of tree; BST only has single node
*/

/*

    Create storage array to store nodes of BST

        if !rootNode
            return null

        base case: if !node.left && !node.right
            shift element into storage array
            return
        
        recursive case:
            
            if node.left
                recurse into tree
            
            if node.right
                recurse into tree
        
        iterate from end of storage array and make count equal to zero
            while you iterate back towards front of array, increase count until it equals k
                when it does, grab element at current index of array
                and return it

*/

