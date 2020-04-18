// Minimum Path Sum

/*
    Given a m x n grid filled with non-negative numbers, 
    find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

    Example:

    Input:[[1,3,1],
           [1,5,1],
           [4,2,1]]

    Output: 7

    Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

/*
    I - matrix (array of arrays) with varied integer amounts
    O - sum of the minimum viable path (viable path's smallest sum)
    C - time complexity (linear)
    E - given an empty matrix; multiple viable path sums

*/

/*
    Depth-First Search

        Create global minimalSum variable

        base case(s): 
        
            if i > matrix.length || j > matrix.height
                return 
        
            if coordinate's x value === matrix.length && coordinate's y value equals matrix.height
                if currentSum < minimal Sum
                    minimal Sum = currentSum
                    return
                else
                    return

        recursive case:

            add value at grid's coordinate to currentSum

            if there is an array below the current coordinate
                dfs (coord[0] + 1, coord[1])
                currentSum -= value of current coordinate
            
            if there is an element to the right of the current coordinate
                dfs (coord[0], coord[1] + 1)
                currentSum -= value of current coordinate

*/

var minPathSum = function(grid) {
    let minimalSum = null;

    if (!grid.length) {
        return null
    }

    const dfs = (coord, currentSum) => {
        currentSum += grid[coord[0]][coord[1]]

        if ((coord[1] > grid[0].length - 1) || (coord[0] > grid.length -1)) {
            return
        }

        if ((coord[1] === grid[0].length - 1) && (coord[0] === grid.length - 1)) {
            if (currentSum < minimalSum) {
                minimalSum = currentSum
                return
            } else if (!minimalSum) {
                minimalSum = currentSum
                return
            } else {
                return
            }
        }

        if (grid[coord[0] + 1] !== undefined) {
            let down = [coord[0] + 1, coord[1]]
            dfs(down, currentSum)
        }

        if (grid[coord[0]][coord[1] + 1] !== undefined) {
            let right = [coord[0], coord[1] + 1]
            dfs(right, currentSum)
        }
    }

    dfs([0, 0], minimalSum)
    return minimalSum
};