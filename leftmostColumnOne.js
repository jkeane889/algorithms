// Leftmost Column with at Least a One

/*
    (This problem is an interactive problem.)

    A binary matrix means that all elements are 0 or 1. 
    For each individual row of the matrix, this row is sorted in non-decreasing order.

    Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) 
    with at least a 1 in it. If such index doesn't exist, return -1.

    You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

    BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
    BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
    Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  

    Also, any solutions that attempt to circumvent the judge will result in disqualification.

    For custom testing purposes you're given the binary matrix mat as input in the following 
    four examples. You will not have access the binary matrix directly.

    Example 1:

        Input: mat = [[0,0],
                      [1,1]]
        Output: 0

    Example 2:

        Input: mat = [[0,0],
                      [0,1]]
        Output: 1

    Example 3:

        Input: mat = [[0,0],
                      [0,0]]
        Output: -1

    Example 4:

        Input: mat = [[0,0,0,1],
                      [0,0,1,1],
                      [0,1,1,1]]
        Output: 1

*/

/*
    I - binary matrix with properties of ".get" function and ".dimensions" functions
    O - leftmost column (0-indexed) with at least a one in it
    C - time complexity (quadratic?)
    E - matrix has no one in it (return -1)

*/

/*
    BFS of matrix starting at top right

    create length variable equal to matrix[0].length
    create height variable equal to matrix.length

    create an array "visited" of false that represents matrix

    create variable called leftMost = undefined

    create a queue

    add given coordinate to queue 

    while queue.length
        shift element off of queue
        
        get value off element at that coordinate
        
        if value === '1' && coordinate x value < leftMost value
            leftMost = coordinate x value
            if there is an array to the left && !visited
                add it's topmost coordinate to the queue

        if value === '0'
            if there is an array below the current coordinate && !visited
                add it to queue
            if there isn't, check if there is an array to the left && !visited
                if there is, add it's topmost coordinate to the queue (at row 0)
        

    call binaryMatrix.dimensions to get dimensions of matrix
    starting coordinate for BFS will be ending element of first array [n.length - 1, 0]

*/

const leftMostColumnWithOne = binaryMatrix => {
    let leftMost;

    const getLeftMostOne = (coordinate, matrix) => {
        let queue = []

        queue.push(coordinate)

        while (queue.length) {
            let coord = queue.shift()
            let value = matrix.get(coord[0], coord[1])

            if (value === 1) {
                if (leftMost === undefined) {
                    leftMost = coord[1]
                } else if (coord[1] < leftMost) {
                    leftMost = coord[1]
                }

                if (coord[1] - 1 >= 0) {
                    queue.push([0, coord[1] - 1])
                    
                }
            }

            if (value === 0) {
                if (coord[0] + 1 <= dimensions[0] - 1) {
                    queue.push([coord[0] + 1, coord[1]])
                }
            }
        }
    }


    let dimensions = binaryMatrix.dimensions()
    let startCoord = [0, dimensions[0] - 1]

    getLeftMostOne(startCoord, binaryMatrix)
    if (leftMost === undefined) {
        return -1
    } else {
        return leftMost
    }
};