// 542. 01 Matrix

/*
    Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

    The distance between two adjacent cells is 1.

    Example 1:

    Input:
    [[0,0,0],
    [0,1,0],
    [0,0,0]]

    Output:
    [[0,0,0],
    [0,1,0],
    [0,0,0]]
    Example 2:

    Input:
    [[0,0,0],
    [0,1,0],
    [1,1,1]]

    Output:
    [[0,0,0],
    [0,1,0],
    [1,2,1]]    

    Note:

    The number of elements of the given matrix will not exceed 10,000.
    There are at least one 0 in the given matrix.
    The cells are adjacent in only four directions: up, down, left and right.

*/

/*
    I - matrix of 0s and 1s
    O - updated matrix that denotes the cell number away for each cell to the closest zero
    C - linear time complexity with DFS recursion
    E - given an empty matrix; finding the CLOSEST zero

    Pseudocode

    DFS recursion using coordinates

    base case: if element equals zero, return distance to this zero
    recursive case:
        if element above !== 0
            recurse and add 1 to distance
        if element below
            recurse and add 1 to distance
        if element to left
            recurse and add 1 to distance
        if element to right 
            recurse and add 1 to distance

    Iterate over arrays in matrix
        iterate over elements in matrix
            if element !== 0
                element = call dfs function to return distance to closest zero

    return matrix
*/

const getDistance = (matrix, x, y) => {
    let closest = null
    let booleanArr = Array(matrix.length).fill(0).map(arr => Array(matrix[0].length).fill(false))

    const getClosestZero = (xCord, yCord, current) => {
        booleanArr[yCord][xCord] = true

        if (matrix[yCord][xCord] === 0) {
            if (!closest) {
                closest = current
                return
            } else if (current < closest) {
                return current
            } else {
                return
            }
        }

        if (matrix[yCord - 1] !== undefined) {
            if (!booleanArr[yCord - 1][xCord]) {
                getClosestZero(xCord, yCord - 1, current += 1)
                current -= 1
            }
        }

        if (matrix[yCord][xCord + 1] !== undefined) {
            if (!booleanArr[yCord][xCord + 1]) {
                getClosestZero(xCord + 1, yCord, current += 1)
                current -= 1
            }
        }

        if (matrix[yCord + 1] !== undefined) {
            if (!booleanArr[yCord + 1][xCord]) {
                getClosestZero(xCord, yCord + 1, current += 1)
                current -= 1
            }
        }

        if (matrix[yCord][xCord - 1] !== undefined) {
            if (!booleanArr[yCord][xCord - 1]) {
                getClosestZero(xCord - 1, yCord, current += 1)
                current -= 1
            }
        }
    }

    getClosestZero(x, y, 0)
    return closest
}

const updateMatrix = (matrix) => {
    if (!matrix.length) {
        return null
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) {
                matrix[i][j] = getDistance(matrix, j, i)
            }
        }
    }

    return matrix
};