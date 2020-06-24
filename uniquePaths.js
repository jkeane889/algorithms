// Unique Paths

/*
    A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

    The robot can only move either down or right at any point in time. 

    The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

    How many possible unique paths are there?

    Constraints:
        - 1 <= m, n <= 100
        - It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

*/

/*
    I - m & n, height and width of grid
    O - number of unique paths that can be achieved from top left to bottom right of grid
    C - time complexity of visiting each place in grid
    E - empty grid

*/

/*
    Technique to solve dynamic programming problems ("FAST"):
        F - find recursive solution
        A - analyse the solution (look for overlapping problems)
        S - save the results for the future
        T - tweak solution to make it more powerful by eliminating recursion overhead

    (Recursive Solution)

    For Speed (DFS using coordinates "n" and "m")

    "uniquePaths" Function:

        Create global variable paths initialized to zero

        Create inner recursive function

            base case: if x coordinate === m && y coordinate === n
                            add 1 to paths variable
                            return

            recursive case:

                if there is an available position to the right
                    dfs(array, y coordinate, x coordinate += 1)

                if there is an available position down
                    dfs(array, y coordinate += 1, x coordinate)

*/

// Recursive Solution

const uniquePaths = (m, n) => {
    let paths = 0
    let matrix = Array(n).fill(0).map(arr => Array(m).fill(1))

    const findPaths = (x, y) => {
        if (x === (m - 1) && y === (n- 1)) {
            paths += 1
            return
        }

        if (matrix[y][x + 1] !== undefined) {
            findPaths(x + 1, y)
        }

        if (matrix[y + 1] !== undefined) {
            findPaths(x, y + 1)
        }
    }

    findPaths(0, 0)
    return paths
};

// Dynamic Programming Solution

const uniquePaths = (m, n) => {
    let matrix = Array(n).fill(0).map(arr => Array(m).fill(0))  

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][0] = 1
    }

    for (let i = 0; i < matrix[0].length; i++) {
        matrix[0][i] = 1
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        }
    }

    return matrix[n - 1][m - 1]
};