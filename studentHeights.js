/*
    Students are asked to stand in non-decreasing order of heights for an annual photo.

    Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

    Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

    Example 1:

    Input: heights = [1,1,4,2,1,3]
    Output: 3
    Explanation: 
    
    Current array : [1,1,4,2,1,3]
    Target array  : [1,1,1,2,3,4]
    
    On index 2 (0-based) we have 4 vs 1 so we have to move this student.
    On index 4 (0-based) we have 1 vs 3 so we have to move this student.
    On index 5 (0-based) we have 3 vs 4 so we have to move this student.
    
    Example 2:

    Input: heights = [5,1,2,3,4]
    Output: 5
    
    Example 3:

    Input: heights = [1,2,3,4,5]
    Output: 0

    Constraints:

    1 <= heights.length <= 100
    1 <= heights[i] <= 100

*/

/*
    Return the minimum amount of shifts required to order the array in ascending order

    Iterate over array elements
    
    Create a filter function that returns 1 or -1 depending
        on input values (greater than/less than)
    
    Create function that takes in array
        create a min value that equals to zero

        call sort method on input array
            if input array has a value shifted, increase 
                minimum amount by 1
            
        return minimum amount

*/

/*
    I - array of unordered integer values representing heights
    O - number of array shifts to equal ordered array of ascending values
    C - linear time complexity
    E - given an empty array, given an already ordered array
*/

const heightChecker = (heights) => {
    if (!heights.length) {
        return null
    }

    let sortedHeights = heights.slice(0).sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count += 1
        }
    }

    return count
};