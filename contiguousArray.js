// Contiguous Array

/*
    Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

    Example 1:

    Input: [0,1]
    Output: 2

    Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

    Example 2:

    Input: [0,1,0]
    Output: 2

    Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

    Note: The length of the given binary array will not exceed 50,000.

*/

/*
    I - binary array of 0's and 1's
    O - integer representing the longest contiguous array with an equal number of 0's and 1's
    C - time complexity (linear time)
    E - empty array, odd number of elements in array
*/

/*
    Create global variable equal to max Length
    Create global variable equal to current Length
    Create stack
    Create tempStack 

    Iterate over values in given binary array (while array.length)
        shift off element from array
        if element === 1
            next element === '0'
        if element === 0
            next element === '0'

        if !stack.length
            push element
        else if there is an element in the stack
        
            pop off topmost element and check if it's equal to next element
        
            if it is
                add two to current length
        
            if it isn't and there are more elements in stack
                push topmost element into tempStack
                
                while stack.length

                    pop off following element in stack and check if it's equal to next
                    if it isn't, keep adding items to tempStack
                        once there is nothing else left in stack, push back all elements from 
                        tempstack back in order to stack
                    if it is
                        add two to current length and delete this top most element
        
        if there are no elements left in stack
            check if current length > maxLength
                if it is, set max Length to current Length
                          
*/

const findMaxLength = nums => {
    let hash = {}
    let ans = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += (nums[i]) ? 1 : -1;
        if (sum === 0) {
            ans = i + 1
        } else if (hash[sum] !== undefined) {
            ans = Math.max(ans, i - hash[sum])
        } else {
            hash[sum] = i
        }
    }

    return ans
};