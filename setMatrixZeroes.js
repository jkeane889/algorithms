// Set Matrix Zeroes

/*
    Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

    Example 1:

        Input: [[1,1,1],
                [1,0,1],
                [1,1,1]]
        
        Output: [[1,0,1],
                [0,0,0],
                [1,0,1]]
        
    Example 2:

        Input: [[0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]]
    
        Output: [[0,0,0,0],
                 [0,4,5,0],
                 [0,3,1,0]]

    Follow up:
    - A straight forward solution using O(mn) space is probably a bad idea.
    - A simple improvement uses O(m + n) space, but still not the best solution.
    - Could you devise a constant space solution?

*/

/*
    I - matrix (array of arrays) with varied integers
    O - updated array with rows set to zero and columns for any cell that equals 0
    C - quadratic time complexity?
    E - give a matrix of zero length; multiple zeroes included on a row/column

*/

/*
    Create an object for rows that have been converted

    Create an object for columns that have been converted

    Iterate over each array
        Iterate over array's elements
            if an element === 0

            if column object[j] does not exist && row object [i] does not exist 
                if there is an array above the current element
                    while current element's y value > 0
                        set each above element to zero

                if there is an array below the current element
                    while current element's y value < matrix.height
                        set each below element to zero

                if there is an element to the left of the current element
                    while current element's x value > 0
                        set each element to the left to zero
                
                if there is an element to the right of the current element
                    while current element's y value < matrix.length
                        set each element to the right to zero
                
                add this row into row object
                add this column into column columnObj
    
*/

const setZeroes = matrix => {
    let targets = {}

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                let key = i.toString() + j.toString()
                targets[key] = [i, j]
            }
        }
    }

    for (let key in targets) {
        let coord = targets[key]

        if (matrix[coord[0]][coord[1] - 1] !== undefined) {
            let x = coord[1] 

            while (x >= 0) {
                matrix[coord[0]][x] = 0
                x -= 1
            }
        }

        if (matrix[coord[0]][coord[1] + 1] !== undefined) {
            let y = coord[1]

            while (y <= matrix[coord[0]].length - 1) {
                matrix[coord[0]][y] = 0
                y += 1
            }
        }

        if (matrix[coord[0] - 1] !== undefined) {
            let a = coord[0]

            while (a >= 0) {
                matrix[a][coord[1]] = 0
                a -= 1
            }
        }

        if (matrix[coord[0] + 1] !== undefined) {
            let b = coord[0] 

            while (b <= matrix.length - 1) {
                matrix[b][coord[1]] = 0
                b += 1
            }
        }
    } 

    return matrix
}