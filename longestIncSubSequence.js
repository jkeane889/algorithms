// Longest Increasing Subsequence

/*
    Given an unsorted array of integers, find the length of longest increasing subsequence.

    Example:

    Input: [10,9,2,5,3,7,101,18]
    Output: 4 

    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
    Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.

    Follow up: Could you improve it to O(n log n) time complexity?

*/

/*
    I - unsorted array of integers, find the length of the longest increasing subsequence
    O - length of longest increasing subsequence
    C - O(n) ^ 2 time complexity; challenge would be to do it in O(log N)
    E - given an empty array; multiple subsequences with identical increasing lengths (return the first?); no
        increasing subsequence in array
*/

/*
    Depth-First Search algorithm

    Create a global variable longest increasing subsequence

    Iterate over given characters in array
        if the next character is greater than the current character (potential increasing subsequence)
            set result equal to return value from dfs algorithm
            if result.length > maxSubsequence.length
                maxSubsequence = result
    
    Create dfs algorithm

        let currentElement equals first in input array
        let nextElement equals second in input array

        base case: if next element < current element
            return subsequence array

        base case: if !next element
            return subsequence array

        recursive case:
            if nextElement > currentElement
                concat input array with current element
                call dfs and slice array from nextElement 

    return maxSubsequence.length

*/

// FIRST ATTEMPT

// const lengthOfLIS = nums => {
//     if (!nums.length) {
//         return 0
//     }

//     const dfs = (newArr, origArr) => {
//         let current = newArr[newArr.length - 1]
//         let next = origArr[0]

//         if (next < current) {
//             newArr.pop()
//             if (newArr[newArr.length - 1] !== next) {
//                 newArr.push(next)
//                 return dfs(newArr, origArr.slice(1))
//             } else {
//                 return dfs(newArr, origArr.slice(1))
//             }
//         }

//         if (!next) {
//             return newArr
//         }

//         if (next > current) {
//             newArr.push(next)
//             return dfs(newArr, origArr.slice(1))
//         }

//         return newArr
//     }
    
//     let maxSubsequence = []

//     for (let i = 0; i < nums.length; i++) {
//         let result = dfs([nums[i]], nums.slice(i + 1))
//         if (result.length > maxSubsequence.length) {
//             maxSubsequence = result
//         }
//     }

//     return maxSubsequence.length
// };

// SECOND ATTEMPT - SOLUTION

const lengthOfLIS = nums => {
    if (!nums.length) {
        return 0
    }

    const binarySearchPosition = (dp, target, hi) => {
        let lo = 0;
        
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (target === dp[mid]) {
                return mid;   
            } else if (target < dp[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            } 
        }

        return lo;
    }
    
    if (nums === null || nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return 1
    }
    
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    
    for (let i = 0; i < nums.length; i++) {
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
    }

    for (let i = dp.length-1; i >= 0; i--) {
        if (dp[i] !== Number.MAX_SAFE_INTEGER) {
            return i + 1;
        }
    }
    
    return 0;
};