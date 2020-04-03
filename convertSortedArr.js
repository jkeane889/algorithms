// Convert Sorted Array to Binary Search Tree

/*
    Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree 
    in which the depth of the two sub-trees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5],
    which represents the following height balanced BST:

             0
            / \
          -3   9
          /   /
        -10  5

*/

/*
    I - sorted array that contains negative and positive integers
    O - array that is sorted to represent balanced BST
    C - time complexity O(n)
    E - empty array, no negatives or no positive numbers
*/

/*
    Recursive binary search of array

    Create inner recursive function
    
        if (array.length === 0) {
            return
        }

        get midPoint of array and set it equal to new Tree

        split array from beginning to midPoint
        split array from midPoint to end

        if (!this.left) {
            this.left = begMidPoint[last element]
        }

        if (!this.right) {
            this.right = midPointEnd[first element]
        }

        this.left = recurse
        this.right = recurse

*/

const TreeNode = val => {
    let node = {}
    node.val = val
    node.left = null
    node.right = null
    return node
}

const sortedArrayToBST = nums => {
    if (!nums.length) {
        return null
    }

    const generateBST = (nums, low, high) => {
        if (low > high) {
            return null
        }

        let mid = Math.floor((low + high) / 2)
        let node = TreeNode(nums[mid])
        node.left = generateBST(nums, low, mid - 1)
        node.right = generateBST(nums, mid + 1, high)
        return node
    }

    return generateBST(nums, 0, nums.length - 1)
};