// Sort Colors

/*
    Given an array with n objects colored red, white or blue, 
    sort them in-place so that objects of the same color are adjacent, 
    with the colors in the order red, white and blue.

    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

    Note: You are not suppose to use the library's sort function for this problem.

    Example:

    Input: [0,2,2,1,1,0]
    Output: [0,0,1,1,2,2]
    
    Follow up:

    - A rather straight forward solution is a two-pass algorithm using counting sort.
        
        First, iterate the array counting number of 0's, 1's, and 2's, then 
        overwrite array with total number of 0's, then 1's and followed by 2's.

    - Could you come up with a one-pass algorithm using only constant space?

*/

/*
    I - array containing varied amounts of 0, 1, 2 as integers
    O - ordered array from 0 -> 2
    C - 2 * O(n) -> double iteration; can this be done in O(n)
    E - given an empty array; missing 1s or 2s

*/

/*
    Create a storage variable for element that is greater than next value in array

    Iterate over elements in array
        if element === 2
            splice element out of array and push to end
        if element === 1
            set j as pointer at last element in array

            while j > 0
                if element at j !== 2
                    splice in 1
                else 
                    j --
        if element === 0
            splice zero out of array
            and unshift to front of array

*/

// ORIGINAL SOLUTION - INCOMPLETE

// const sortColors = nums => {

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 2) {
//             nums.splice(i, 1)
//             nums.push(2)
//             if (i !== 0) {
//                 i -= 1
//             }
//         }

//         if (nums[i] === 1) {
//             nums.splice(i, 1)
//             let j = nums.length - 1

//             while (j >= 0) {
//                 if (nums[j] !== 2) {
//                     nums.splice(j + 1, 0, 1)
//                     break
//                 } else {
//                     j--
//                 }
//             }
//             if (i !== 0) {
//                 i -= 1
//             }
//         }

//         if (nums[i] === 0) {
//             nums.splice(i, 1)
//             nums.unshift(0)
//             if (i !== 0) {
//                 i -= 1
//             }
//         }
//     }

//     return nums
// };

// SOLUTION CODE USING TWO POINTERS APPROACH

const sortColors = nums => {
    if (!nums || nums.length === 0) {
        return nums
    }

    let left = 0
    let right = nums.length - 1
    
    for (let i = 0; i < nums.length && i <= right; i++) {
        if (nums[i] === 0) {
            let temp = nums[left]
            nums[left] = 0
            nums[i] = temp
            left++
        } else if (nums[i] === 2) {
            let temp = nums[right]
            nums[right] = 2
            nums[i] = temp
            right--
            i--
        }
    }

    return nums
}