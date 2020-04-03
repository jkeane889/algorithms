// Maximum Subarray

/*

    Given an integer array nums, find the contiguous subarray (containing at least one number)
    which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
    Follow up:

    If you have figured out the O(n) solution, try coding another 
    solution using the divide and conquer approach, which is more subtle.

*/

/*
    I - an array of nums
    O - largest sum from contiguous subarray within given array of nums
    C - O(n) time complexity
    E - given an empty array
*/

/*

    Iterative Solution

    Create global value equal to max sum initialized to zero
    Create global current sum variable initialized to zero

    Iterate over values in array
        add element to current sum
        maxSum = Math.max(currentSum, maxSum)
        if (i === array.length - 1)
            array = array.slice(1)
            i = 0

*/

const maxSubArray = nums => {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        maxSum = Math.max(currentSum, maxSum)
        if (i === nums.length - 1) {
            nums = nums.slice(1)
            i = 0;
        }
    }

    return maxSum
};