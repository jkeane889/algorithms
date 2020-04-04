// Valid Sudoku

/*
    Determine if a 9x9 Sudoku board is valid. 
    Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

    A partially filled sudoku which is valid.

    The Sudoku board could be partially filled, where empty cells are filled with the character '.'

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    
    Only the filled cells need to be validated according to the mentioned rules.
    
    The given board contain only digits 1-9 and the character '.'
    
    The given board size is always 9x9.
*/

/*

    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]

    Output: true

*/

/*
    I - matrix (array of arrays) of partially filled spaces with integers for sudoku puzzle
    O - boolean indicating whether sudoku board is valid 
    C - time complexity (breadth first recursion and back-tracking)
    E - empty board

*/

/*

    Create helper function to check all horizontal spaces of board
        create global boolean value initialized to true
        create global storage object equal to values 1 - 9 all initialized to 0

        iterate over each row in grid
            create copy of global storage object
            iterate over each element
                if element in copy of storage object and equal to 0
                    set equal to 1
                else 
                    add 1 to copy of storageObj's values
            
            iterate over copy of global storage object
                if any values equal to 0 or to 2
                    global storage boolean equal false

    Create helper function to check all vertical spaces of board
        create global boolean value initialized to true
        create global storage object equal to values 1 - 9 all initialized to 0

        iterate over each row in grid
            create copy of global storage object
            iterate over each vertical element
                if element in copy of storage object and equal to 0
                    set equal to 1
                else 
                    add 1 to copy of storageObj's values
            
            iterate over copy of global storage object
                if any values equal to 0 or to 2
                    global storage boolean equal false

    Create function to do a breadth-first check of 9x9 board
        create matrix equal to 9 x 9 board with values initialized to false
        create global storage object equal to values 1 - 9 all initialized to 0
        
        create queue

        add fist element [0, 0] from input board to queue
        and set corresponding matrix element to true

        while queue.length
            iterate over elements in queue
                remove element from queue    
                if corresponding matrix coordinate is equal to false (hasn't been visited)
                    push into queue
                    and if it's value in object equals zero, set it to one
                    if it already exists in object, add one to it
            
            keep iterating until all values in matrix have been visited (true)

        iterate over all values in global storage object
             if any values equal to 0 or to 2
                    global storage boolean equal false

    Inside of main function

        call horizontal check on matrix
        call vertical check on matrix

        Want to segment larger matrix into 9 x 9 grids for breadth-first helper function

        create storage array 

        slice large matrix into % 3 portions of rows and columns

            pass in portions to BFS helper function


*/


const isValidSudoku = board => {
    let valid = true

    const checkHorizontal = grid => {
        let validHorz = true

        for (let i = 0; i < grid.length; i++) {
            let sudoNums = {}
            for (let j = 0; j < grid[i].length; j++) {
                if (!sudoNums[grid[i][j]] >= 1 && !sudoNums[grid[i][j]] <= 9) {
                    validHorz = false
                } else if (!sudoNums[grid[i][j]]) {
                    sudoNums[grid[i][j]] = true
                } else if (sudoNums[grid[i][j]]) {
                    validHorz = false
                    return validHorz
                }
            }
        }

        return validHorz
    }

    const checkVertical = grid => {
        let validVert = true
        let gridHeight = grid.length
        let i = 0;

        while (i < gridHeight) {
            let sudoNums = {}

            for (let j = 0; j < grid.length; j++) {
                if (!sudoNums[grid[j][i]] >= 1 && !sudoNums[grid[j][i]] <= 9) {
                    validVert = false
                } else if (!sudoNums[grid[j][i]]) {
                    sudoNums[grid[j][i]] = true
                } else if (sudoNums[grid[j][i]]) {
                    validVert = false
                    return validVert
                }
            }

            i++
        }

        return validVert
    }

    const checkCells = grid => {
        let validCellGroup = true

        const bfs = (grid, value) => {
            let queue = []
            let sudoObj = {}
            let length = grid[0].length
            let height = grid.height
            let flags = Array(height).fill(0).map(x => Array(length).fill(false))

            if (height === 0) {
                return
            }

            queue.push(value)

            while (queue.length) {
                for (let i = 0; i < queue.length; i++) {
                    let item = queue[i]
                    let row = parseInt(item[0])
                    let column = parseInt(item[1])

                    let sudoVal = grid[row][column]

                    if (row < 0 || column < 0 || row >= height || column >= height) {
                        continue
                    }

                    flags[row][column] = true

                    if (!sudoVal >= 1 && !sudoVal <= 9) {
                        validCellGroup = false
                    } else if (!sudoObj[sudoVal]) {
                        sudoObj[sudoVal] = true
                        if (grid[row][column + 1]) {
                            queue.push([row, column + 1])
                        }

                        if (grid[row + 1][column]) {
                            queue.push([row + 1, column])
                        }
                    } else if (sudoObj[sudoVal]) {
                        validCellGroup = false
                        return validCellGroup
                    }
                }
            }
        }

        bfs(grid, [0, 0])
        return validCellGroup
    }

    valid = checkHorizontal(board)
    valid = checkVertical(board)

    for (let i = 0; i < board.length; i++) {
        let matrices = {}
        for (let j = 0; j < board[i].length; j++) {
            let start = 0
            if (j % 3 === 0) {
                let matrix = []
                let grouping = board[i].slice(start, j)
                matrix.push(grouping)
                if (!matrices[start]) {
                    matrices[start] = matrix
                } else {
                    matrices[start].push(matrix)
                }
                start = j
            }
        }

        if (i % 3 === 0) {
            for (let matrix in matrices) {
                valid = checkCells(matrix)
            }
        }
    }

    return valid
};