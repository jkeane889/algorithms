// Search a 2D Matrix II

/*
    Write an efficient algorithm that searches for a value in an m x n matrix.
    This matrix has the following properties:

    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.
    
    Example:

    Consider the following matrix:

    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]

    Given target = 5, return true.

    Given target = 20, return false.

*/

/*
    I - array of arrays (matrix) that contains varied integer values
    O - boolean indicating whether value contained within matrix
    C - time complexity of search matrix (quadratic?) BFS
    E - empty matrix, duplicate values?

*/

/*
    Breadth-First Search algorithm

    Set global variable inside searchMatrix to false

    Inside of main function create BFS function
        (only checking right/down, not multi-directional, no need for array denoting visited nodes)
        create a queue as an array
        create a variable current value and set it equal to [0, 0] of matrix
        push into queue current value

        while queue has a length
            pop off queue value
            look at matrix item at location current value
            if item at location equals target
                return true from function
            else
                check if there is an element ahead in same row [0, i + 1]
                check if there is an element ahead in same column [i + 1, 0]
                push both elements into queue
        
        return false
*/


// OLD SOLUTION WITHOUT IDEAL TIME COMPLEXITY: 

/*
    const searchMatrix = (matrix, target) => {
        if (!matrix.length) {
            return false
        }
        
        const bfs = (grid, initial, value) => {
            let queue = []
            let length = grid[0].length
            let height = grid.length
            let visitedNodes = Array(height).fill([]).map(arr => Array(length).fill(false))
            let nextRowElem;
            let nextColElem;
            queue.push(initial)

            while (queue.length) {
                let current = queue.shift()

                visitedNodes[current[0]][current[1]] = true

                if (grid[current[0]][current[1]] === value) {
                    return true
                    break              
                } else {
                    if (grid[current[0]][current[1] + 1] && !visitedNodes[current[0]][current[1] + 1]) {
                        nextRowElem = [current[0], current[1] + 1]
                        visitedNodes[current[0]][current[1] + 1] = true
                        queue.push(nextRowElem)
                    }

                    if (grid[current[0] + 1] && visitedNodes[current[0] + 1] && !visitedNodes[current[0] + 1][current[1]]) {
                        nextColElem = [current[0] + 1, current[1]]
                        visitedNodes[current[0] + 1][current[1]] = true
                        queue.push(nextColElem)
                    }
                }
            }

            return false
        }

        return bfs(matrix, [0, 0], target)
    };

*/

// NEW SOLUTION WITH IDEAL TIME COMPLEXITY: 

const searchMatrix = (matrix, target) => {
    if (!matrix.length) {
        return false
    }

    const binarySearch = (arr, val) => {
        if (arr.length === 1) {
            if (arr[0] === val) {
                return true
            } else {
                return false
            }
        }

        let mid = Math.floor(arr.length / 2)
        let midVal = arr[mid]

        if (val >= midVal) {
            let newArr = arr.slice(mid)
            return binarySearch(newArr, val)
        } else if (val < midVal) {
            let newArr = arr.slice(0, mid)
            return binarySearch(newArr, val)
        }
    }

    let potentialArray = null
    let included = false

    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i]
        let lowest = current[0]
        let greatest = current[current.length - 1]

        if (target === lowest || target === greatest) {
            return true
        } else if (target > lowest && target < greatest) {
            potentialArray = current
            included = binarySearch(potentialArray, target)
            if (included) {
                return true
            }
        }
    }

    return included
};