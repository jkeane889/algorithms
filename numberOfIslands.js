// Number of Islands

/*
    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
    An island is surrounded by water and is formed by connecting adjacent lands 
    horizontally or vertically. 
    
    You may assume all four edges of the grid are all surrounded by water.

    Example 1:

        Input: 11110
               11010
               11000
               00000

        Output: 1

    Example 2:

        Input: 11000
               11000
               00100
               00011

        Output: 3

*/

/*
    I - grid (matrix) containing 0's and 1's representing water and island bodies
    O - number of islands in matrix (connecting 1's and 0's)
    C - time complexity (BFS search)
    E - no islands in matrix, the whole matrix is and island, multiple but separate islands

*/

/*
    BFS search of matrix/grid of water and islands

    Create global variable for island count

    create variable called length for amount of elements inside single array in grid
    create variable called height for total amount of arrays inside grid
    create visited array to track elements that have been touched in grid

    Iterate over elements in matrix
        if element equals 1
            island count = 1 + call bfs function and pass in matrix
    
    Create bfs helper function with parameter of matrix and coordinate
        create a queue as an array

        push coordinate argument into queue

        while there are elements in queue

            shift off current element from queue

            mark current element as visited
            
            if there is an array above (grid[0] - 1)
                check to see if there's a coordinate above current coordinate equal to 1
                    if there is, push that into queue 
            
            if there is an element to the right of the current coordinate
                check to see if that next coordinate is equal to 1
                    if it is, push that into the queue
            
            if there is an element to the bottom of the current coordinate
                check to see if that below coordinate is equal to 1
                    if it is, push that into the queue
            
            if there is an element to the left of the current coordinate
                check to see if that left coordinate is equal to 1
                    if it is push that into the queue
*/


// ORIGINAL BREADTH FIRST SEARCH BELOW - WAS TOO SLOW! 

// const numIslands = grid => {
//     if (!grid.length) {
//         return null
//     }

//     let islandCount = 0
//     let length = grid[0].length
//     let height = grid.length
//     let visited = Array(height).fill(0).map(arr => Array(length).fill(false))
    
//     const bfs = (matrix, coordinate) => {
//         let queue = []

//         queue.push(coordinate)

//         while (queue.length) {
//             let element = queue.shift()

//             visited[element[0]][element[1]] = true

//             if (matrix[element[0] + 1]) {
//                 if (matrix[element[0] + 1][element[1]] === "1" && !visited[element[0] + 1][element[1]]) {
//                     queue.push([element[0] + 1, element[1]])
//                 }
//             }

//             if (matrix[element[0]][element[1] + 1]) {
//                 if (matrix[element[0]][element[1] + 1] === "1" && !visited[element[0]][element[1] + 1]) {
//                     queue.push([element[0], element[1] + 1])
//                 }
//             }

//             if (matrix[element[0] - 1]) {
//                 if (matrix[element[0] - 1][element[1]] === "1" && !visited[element[0] - 1][element[1]]) {
//                     queue.push([element[0] - 1, element[1]])
//                 }
//             }

//             if (matrix[element[0]][element[1] - 1]) {
//                 if (matrix[element[0]][element[1] - 1] === "1" && !visited[element[0]][element[1] - 1]) {
//                     queue.push([element[0], element[1] - 1])
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === "1" && !visited[i][j]) {
//                 bfs(grid, [i, j])
//                 islandCount += 1
//             }
//         }
//     }

//     return islandCount
// };

// DEPTH FIRST SEARCH ALGO BELOW - FASTER!

var numIslands = function(grid) {
    if (!grid.length) {
        return null
    }

    let islands = 0
    
    function deleteIsland(x, y) {
        grid[y][x] = '.';
        
        if (y > 0) {
            if (grid[y - 1][x] === '1') {
                deleteIsland(x, y - 1);
            }
        }

        if (y < grid.length - 1) {
            if (grid[y + 1][x] === '1') {
                deleteIsland(x, y + 1);
            }
        }

        if (x > 0) {
            if (grid[y][x - 1] === '1') {
                deleteIsland(x - 1, y);
            }
        }

        if (x < grid[y].length) {
            if (grid[y][x + 1] === '1') {
                deleteIsland(x + 1, y);
            }
        }    
    }

    for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '1') {
                islands++;
                deleteIsland(x, y);
            }
        }
    }

    return islands;
}
