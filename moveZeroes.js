// Move Zeroes

/*
    Given an array numbers, write a function to move all 0's to the end
    of it while maintaining the relative order of the non-zero elements.

    Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
    
    Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
*/

/*
    I - array of numbers that contain zeroes and positive (and negative?) integers
    O - array with all zeroes moved to end of array
    C - linear time complexity / in-place insertion
    E - array with no zero elements, array that contains negative numbers

*/

/*
    Iterate over elements in given array

    if element === 0
        splice out current element at current index position
        and splice/inject at end of array
    
    return array

*/

const moveZeroes = nums => {
    if (!nums.length) {
        return nums
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            temp = nums.splice(i, 1)
            nums.push(temp[0])
        }
    }

    return nums
};

console.log(moveZeroes([0,1,0,3,12]))