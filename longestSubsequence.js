/*
    Given an unsorted array of integers, 
    find the length of longest continuous increasing subsequence (subarray).

    Example 1:
    Input: [1,3,5,4,7]
    Output: 3

    Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
    Even though [1,3,5,7] is also an increasing subsequence, 
    it's not a continuous one where 5 and 7 are separated by 4. 

    Example 2:
    Input: [2,2,2,2,2]
    Output: 1
    Explanation: The longest continuous increasing subsequence is [2], its length is 1. 

    Note: Length of the array will not exceed 10,000.
*/

/*
    I - array of unsorted integers
    O - integer representing length of longest continuous subsequence
    C - linear time complexity
    E - Given an empty array; no continuous subsequence; multiple subsequences with same length
*/

/*
    Create global variable longest subsequence equal to null
    Create global current subsequence length equal to null

    Iterate over input array
        if number at i is less than next number  
            current subsequence ++
        else
            if current subsequence > longest subsequence
                longest = current 
                current = 0
*/

const findLengthOfLCIS = (nums) => {
    if (!nums.length) {
        return null
    }
    
    let longest = 0
    let current = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            current += 1
        } else {
            if (current > longest) {
                longest = current
                current = 1
            } else {
                current = 1
            }
        }
    }

    return longest
};