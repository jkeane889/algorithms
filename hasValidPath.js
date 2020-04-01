// Has Valid Path

/*
    Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:

    1 which means a street connecting the left cell and the right cell.
    2 which means a street connecting the upper cell and the lower cell.
    3 which means a street connecting the left cell and the lower cell.
    4 which means a street connecting the right cell and the lower cell.
    5 which means a street connecting the left cell and the upper cell.
    6 which means a street connecting the right cell and the upper cell.

    You will initially start at the street of the upper-left cell (0,0). 
    
    A valid path in the grid is a path which starts from the upper left cell 
    (0,0) and ends at the bottom-right cell (m - 1, n - 1). 
    
    The path should only follow the streets.

    Notice that you are not allowed to change any street.

    Return true if there is a valid path in the grid or false otherwise.

    Input: grid = [[2,4,3],[6,5,2]]
    Output: true
    
    Explanation: As shown you can start at cell (0, 0) 
    and visit all the cells of the grid to reach (m - 1, n - 1).

    Input: grid = [[1,2,1],[1,2,1]]
    Output: false
    
    Explanation: As shown you the street at cell (0, 0) 
    is not connected with any street of any other cell and you will get stuck at cell (0, 0)

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    1 <= grid[i][j] <= 6    
*/

/*
    I - (matrix) an array of arrays with values representing street types
    O - boolean value indicating whether there is a valid route through matrix
    C - time complexity (BFS recursion)
    E - streets on the perimeter of the matrix
*/

/*
    Create global boolean value and initialize it to false

    Iterate over given input array starting at [0, 0]
        call bfs function on array input

    Create inner bfs function that takes grid and value as parameters
        create variable height equal to grid.length
        create variable length equal to grid[0].length    

        create queue = []
        and push in value argument into queue

        create another matrix to represent potential routes and set all values equal to false

        while queue is not empty

            dequeue current element from queue

            iterate over grid and potential values

*/

const hasValidPath = grid => {
    let validPath = false

    const findPath = (grid, value) => {
        let queue = []
        let length = grid[0].length
        let height = grid.length
        let route = Array(height).fill(0).map(x => Array(length).fill(false))

        if (height === 0) {
            return
        }

        queue.push(value)

        while (queue.length) {
            for (let i = 0; i < queue.length; i++) {
                let item = queue.shift()
                if (item === [length, height]) {
                    validPath = true   
                }
                let row = parseInt(item[0])
                let column = parseInt(item[1])
                let streetVal = grid[row][column]

                if (row < 0 || column < 0 || row >= height || column >= length) {
                    continue
                }

                route[row][column] = true

                if (streetVal === 1) {
                    if (grid[row][column + 1] !== undefined && !route[row][column + 1] && grid[row][column + 1] === 3 || grid[row][column + 1] === 5) {
                        queue.push([row, column + 1])
                    }

                    if (grid[row][column - 1] !== undefined && !route[row][column - 1] && grid[row][column - 1] === 4 || grid[row][column - 1] === 6) {
                        queue.push([row, column - 1])
                    }
                } else if (streetVal === 2) {
                    if (grid[row - 1][column] !== undefined && !route[row - 1][column] && grid[row - 1][column] === 3 || grid[row - 1][column] === 4) {
                        queue.push([row - 1, column])
                    }

                    if (grid[row + 1][column] !== undefined && !route[row + 1][column] && grid[row + 1][column] === 5 || grid[row + 1][column] === 6) {
                        queue.push([row + 1, column])
                    }
                } else if (streetVal === 3) {
                    if (grid[row][column - 1] !== undefined && !route[row][column - 1] && grid[row][column - 1] === 1 || grid[row][column - 1] === 4 || grid[row][column - 1] === 6) {
                        queue.push([row, column - 1])
                    }

                    if (grid[row + 1][column] !== undefined && !route[row + 1][column] && grid[row + 1][column] === 2 || grid[row + 1][column] === 5 || grid[row + 1][column] === 6) {
                        queue.push([row + 1, column])
                    }
                } else if (streetVal === 4) {
                    if (grid[row][column + 1] !== undefined && !route[row][column + 1] && grid[row][column + 1] === 1 || grid[row][column + 1] === 3 || grid[row][column + 1] === 5) {
                        queue.push([row, column + 1])
                    }

                    if (grid[row + 1][column] !== undefined && !route[row + 1][column] && grid[row + 1][column] === 2 || grid[row + 1][column] === 5 || grid[row + 1][column] === 6) {
                        queue.push([row + 1, column])
                    }
                } else if (streetVal === 5) {
                    if (grid[row - 1][column] !== undefined && !route[row - 1][column] && grid[row - 1][column] === 2 || grid[row - 1][column] === 3 || grid[row - 1][column] === 4) {
                        queue.push([row - 1, column])
                    }

                    if (grid[row][column - 1] !== undefined && !route[row][column - 1] && grid[row][column - 1] === 1 || grid[row][column - 1] === 4 || grid[row][column - 1] === 6) {
                        queue.push([row, column - 1])
                    }
                } else if (streetVal === 6) {
                    if (grid[row - 1][column] !== undefined && !route[row - 1][column] && grid[row - 1][column] === 2 || grid[row - 1][column] === 3 || grid[row - 1][column] === 4) {
                        queue.push([row - 1, column])
                    }

                    if (grid[row][column + 1] !== undefined && !route[row][column + 1] && grid[row][column + 1] === 1 || grid[row][column + 1] === 3 || grid[row][column + 1] === 5) {
                        queue.push([row, column - 1])
                    }
                }
            }


        }

    }

    findPath(grid, [0, 0])
    return validPath
};