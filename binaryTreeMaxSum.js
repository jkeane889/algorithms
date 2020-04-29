// Binary Tree Maximum Path Sum

/*
    Given a non-empty binary tree, find the maximum path sum.

    For this problem, a path is defined as any sequence of nodes from 
    some starting node to any node in the tree along the parent-child connections. 
    
    The path must contain at least one node and does not need to go through the root.

    Example 1:

        Input: [1,2,3]

                1
               / \
              2   3

        Output: 6

    Example 2:

        Input: [-10,9,20,null,null,15,7]

                -10
                / \
               9  20
                 /  \
                15   7

        Output: 42

*/

/*
    I - Non-empty binary tree
    O - Maximum path sum (path -> any sequence of nodes form starting node to child nodes)
    C - time complexity of visiting each node (linear)
    E - leaf node; negative nodes

*/

/*
    DFS Tree Traversal

    Create a maxSum variable 
    
    Create an inner recursive function

        if !node.left && !node.right
            check if the current value at this node > maxSum
            if it is
                set maxSum to current Sum
                return
            else
                return

        if firstIteration

            let current sum = node.val

            if node.left
                add to currentSum

            if node.right
                add to currentSum

            if currentSum > maxSum
                maxSum = currentSum
       
            recurse(node.left, currentSum)
            recurse(node.right, currentSum)
    
        else

            let branchSum = node.val

            if node.left 
                branchSum += node.left.val

            if node.right
                branchSum += node.right.val

            if branchSum > node.val
                currentSum = branchSum
            
            if branchSum > maxSum
                maxSum = branchSum

            recurse(node.left, currentSum)
            recurse(node.right, currentSum)
            
*/

const maxPathSum = rootNode => {
    let maxSum = 0

    if (!rootNode) {
        return null
    }

    const getMaxPath = (node, sum) => {
        if (!node.left && !node.right) {
            if (node.val > maxSum) {
                maxSum = node.val
                return
            } else if (sum > maxSum) {
                maxSum = sum
                return
            } else {
                return
            }
        }

        let branchSum;

        if (!sum) {

            if (node.val > maxSum) {
                maxSum = node.val
            }

            if (node.left) {
                if (node.left.val > maxSum) {
                    maxSum = node.left.val
                }

                if ((node.val + node.left.val > maxSum)) {
                    maxSum = node.val + node.left.val
                }

                if (node.right && ((node.val + node.left.val + node.right.val) > maxSum)) {
                    maxSum = node.val + node.left.val + node.right.val
                }
            }

            if (node.right) {
                if (node.right.val > maxSum) {
                    maxSum = node.right.val
                }

                if ((node.val + node.right.val > maxSum)) {
                    maxSum = node.val + node.right.val
                }

                if (node.left && ((node.val + node.right.val + node.left.val) > maxSum)) {
                    maxSum = node.val + node.left.val + node.right.val
                }
            }

        } else {

            branchSum = 0

            if (node.left) {
                let leftSum = sum + node.left.val
                branchSum += node.left.val

                if (leftSum > maxSum) {
                    maxSum = leftSum
                } else if (branchSum > maxSum) {
                    maxSum = branchSum
                } else if (node.left.val > maxSum) {
                    maxSum = node.left.val
                } else if (node.right && (node.right.val + leftSum) > maxSum) {
                    maxSum = node.right.val + leftSum
                } else if (node.right && (node.right.val + branchSum) > maxSum) {
                    maxSum = node.right.val + branchSum
                }
            }

            if (node.right) {
                let rightSum = sum + node.right.val
                branchSum += node.right.val

                if (rightSum > maxSum) {
                    maxSum = rightSum
                } else if (branchSum > maxSum) {
                    maxSum = branchSum
                } else if (node.right.val > maxSum) {
                    maxSum = node.right.val
                } else if (node.left && (node.left.val + rightSum) > maxSum) {
                    maxSum = node.left.val + rightSum
                } else if (node.left && (node.left.val + branchSum) > maxSum) {
                    maxSum = node.left.val + branchSum
                }
            }
        }



        if (node.right) {
            getMaxPath(node.right, branchSum)
        }

        if (node.left) {
            getMaxPath(node.left, branchSum)
        }
    }

    getMaxPath(rootNode, 0)
    return maxSum
};

// Final Solution

var maxPathSum = function(root) {
    var max = Number.MIN_SAFE_INTEGER;
    var maxSum = function (node) {
      if (!node) return 0;
      var left = Math.max(maxSum(node.left), 0);
      var right = Math.max(maxSum(node.right), 0);
      max = Math.max(left + right + node.val, max);
      return Math.max(left, right) + node.val;
    };
    maxSum(root);
    return max;
  };