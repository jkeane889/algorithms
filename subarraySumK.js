// Subarray Sum Equals K

/*
    Given an array of integers and an integer k, 
    you need to find the total number of continuous subarrays whose sum equals to k.

    Example 1:
    
    Input: nums = [1,1,1], k = 2
    Output: 2

    Note:
    - The length of the array is in range [1, 20,000].
    - The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

/*
    I - array of numbers (negative and positive) and a target value
    O - total number of sub-arrays contained within given array whose sum equals target
    C - quadratic for brute force
    E - given an empty array, given a target value less than or greater than any combination
        of subarray
*/

/*
    DFS backtracking 

    Create global total variable to represent subarray combinations that equal target

    Create inner recursive function

        base case: if current sum === target value
                        total combinations += 1
                        return
                
                    if current sum > target value
                        return

        recursive case:

            if no current sum
                current sum = shift off first element from array
            
            iterate over elements in array  
                add element to current sum
                dfs (array.slice(1), target)
                current sum -= element
*/