// 695. Max Area of Island

/*
    Given a non-empty 2D array grid of 0's and 1's, 
    an island is a group of 1's (representing land) 
    connected 4-directionally (horizontal or vertical.) 
    
    You may assume all four edges of the grid are surrounded by water.

    Find the maximum area of an island in the given 2D array. 
    (If there is no island, the maximum area is 0.)

    Example 1:

        [[0,0,1,0,0,0,0,1,0,0,0,0,0],
         [0,0,0,0,0,0,0,1,1,1,0,0,0],
         [0,1,1,0,1,0,0,0,0,0,0,0,0],
         [0,1,0,0,1,1,0,0,1,0,1,0,0],
         [0,1,0,0,1,1,0,0,1,1,1,0,0],
         [0,0,0,0,0,0,0,0,0,0,1,0,0],
         [0,0,0,0,0,0,0,1,1,1,0,0,0],
         [0,0,0,0,0,0,0,1,1,0,0,0,0]]

    Given the above grid, return 6. Note the answer is not 11, 
    because the island must be connected 4-directionally.
    
    Example 2:

    [[0,0,0,0,0,0,0,0]]

    Given the above grid, return 0.

    Note: The length of each dimension in the given grid does not exceed 50.

*/

/*
    I - a matrix (array of arrays) representing islands and water
    O - the max area of an island contained within the grid
    C - time complexity to iterate through matrix (quadratic to look at all islands)
    E - island contained on the perimeter of the matrix, no islands in the grid
*/

/*
    Recursive Breadth first search

    Create a global max perimeter variable initialized to zero
    Create a global current perimeter variable initialized to zero

    Iterate over each array in the matrix
        Iterate over each element in the array
            if an element equals 1
                add one to current area value
                call BFS recursive function on element and set returned value to current area
                if returned current area > max area
                    replace max area with current area
                    set current area to zero
                
                if there aren't any 1 values surrounding current element
                    compare current area value to max, and if greater, replace max with current

*/

const maxAreaOfIsland = grid => {
    let currentArea = 0
    let maxArea = 0

    const findArea = grid => {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    currentArea = bfs(grid, [i, j])
                    if (currentArea > maxArea) {
                        maxArea = currentArea
                        currentArea = 0
                    }
                }
            }
        }
    }

    const bfs = (grid, value) => {
        let queue = []
        let length = grid[0].length
        let height = grid.length

        let booleanArr = Array(height).fill(0).map(x => Array(length).fill(false))

        if (height === 0) {
            return
        }

        queue.push(value)

        while (queue.length) {
            for (let i = 0; i < queue.length; i++) {
                let item = queue.shift()
                let row = parseInt(item[0])
                let column = parseInt(item[1])

                if (row < 0 || column < 0 || row >= height || column >= length || booleanArr[row][column]) {
                    continue
                }

                booleanArr[row][column] = true
                    
                if (grid[row][column - 1] === 1 && !booleanArr[row][column - 1]) {
                    queue.push([row, column - 1])
                }

                if (grid[row][column + 1] !== undefined) {
                    if (grid[row][column + 1] === 1 && !booleanArr[row][column + 1]) {
                        queue.push([row, column + 1])
                    }
                }

                if (grid[row + 1] !== undefined) {
                    if (grid[row + 1][column] === 1 && !booleanArr[row + 1][column]) {
                        queue.push([row + 1, column])
                    }
                }

                if (grid[row - 1] !== undefined) {
                    if (grid[row - 1][column] === 1 && !booleanArr[row - 1][column]) {
                        queue.push([row - 1, column])
                    }
                }
            }
        }

        const area = booleanArr.reduce((total, amount) => {
            amount.forEach(element => {
                if (element === true) {
                    total += 1
                }
            })

            return total
        }, 0)
        
        return area
    }

    findArea(grid)
    return maxArea
};