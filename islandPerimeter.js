// 463. Island Perimeter

/*
    You are given a map in form of a two-dimensional integer grid where 
    1 represents land and 0 represents water.

    Grid cells are connected horizontally/vertically (not diagonally). 
    The grid is completely surrounded by water, and there is exactly 
    one island (i.e., one or more connected land cells).

    The island doesn't have "lakes" (water inside that isn't connected 
    to the water around the island). One cell is a square with side length 1. 
    
    The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

    Example:

    Input:
    [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]

    Output: 16

*/

/*
    I - Matrix (array of arrays) with zeroes and ones representing water and land
    O - the perimeter of the land mass sitting inside the water (0)
    C - iteration through the arrays and calculating land perimeter
    E - land values surrounded by land items (not a perimeter island)

*/

/*
    Create function to look at surrounding elements

    if current element equals 1
        check previous element if it's equal to 0 or if there isn't a next element
            if it is, add one to global perimeter sum
        check next element if it's equal to 0 or if there isn't a next element
            if it is, add one to global perimeter sum
        check if above element is equal to zero if there isn't an above element
            if it is, add one to global perimeter sum
        check  if below element is equal to zero or if there isn't a below element
            if it is, add one to global perimeter sum
    
    return total Perimeter sum

*/

const islandPerimeter = grid => {
    let perimSum = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (grid[i - 1] === undefined || grid[i - 1][j] === 0 || !grid[i - 1][j]) {
                    perimSum += 1    
                }

                if (grid[i][j + 1] === undefined || grid[i][j + 1] === 0) {
                    perimSum += 1
                }

                if (grid[i][j - 1] === undefined || grid[i][j - 1] === 0) {
                    perimSum += 1
                }

                if (grid[i + 1] === undefined || grid[i + 1][j] === 0 || !grid[i + 1][j]) {
                    perimSum += 1
                }
            }
        }
    }

    return perimSum
};

let gridX = [[0,1,0,0],
             [1,1,1,0],
             [0,1,0,0],
             [1,1,0,0]]

console.log(islandPerimeter(gridX));