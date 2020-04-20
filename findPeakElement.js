// Find Peak Element

/*
    A peak element is an element that is greater than its neighbors.

    Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

    The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

    You may imagine that nums[-1] = nums[n] = -∞.

    Example 1:

    Input: nums = [1,2,3,1]
    Output: 2
    
    Explanation: 3 is a peak element and your function should return the index number 2.
    
    Example 2:

    Input: nums = [1,2,1,3,5,6,4]
    Output: 1 or 5 
    
    Explanation: Your function can return either index number 1 where the peak element is 2, 
                or index number 5 where the peak element is 6.
    Note:

    Your solution should be in logarithmic complexity.

*/

/*
    I - an array of varied integers
    O - the peak integer in an array of integers
    C - logarithmic time complexity (O log n)
    E - given an empty array; array has all negative numbers; multiple throughout array

*/

/*
    Similar to just finding maximum value in array

    Create global max variable 

    Create inner recursive function (DFS)

        base case: if array.length === 0
                    return

        let element = arr[0]

        if element > max variable
            max variable = element
            dfs (arr.slice(1))
        else
            dfs{arr.slice(1))

*/

const findPeakElement = nums => {
    let maxIndex = null
    let maximum = null
    let i = 0

    if (!nums.length) {
        return null
    }

    const dfs = array => {
        if (!array.length) {
            return
        }

        if (!maximum) {
            maximum = array[0]
            maxIndex = 0
            i++
            return dfs(array.slice(1))
        }

        let current = array[0]

        if (current > maximum) {
            maximum = current
            maxIndex = i
            i++
            dfs(array.slice(1))
        } else {
            i++
            dfs(array.slice(1))
        }
    }

    dfs(nums)
    return maxIndex
};