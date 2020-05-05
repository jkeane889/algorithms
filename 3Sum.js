// 3Sum

/*
    Given an array nums of n integers, are there elements a, b, c in nums 
    such that a + b + c = 0? 
    
    Find all unique triplets in the array which gives the sum of zero.

    Note:  The solution set must not contain duplicate triplets.

    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:

        [
            [-1, 0, 1],
            [-1, -1, 2]
        ]

*/

/*
    I - array of nums of n integers
    O - all triplet, non-duplicate solution sets that equal zero
    C - having to iterate multiple times over array sequence (m * n)
    E - no triplet sequences that equal 0

*/

/*
    Brute Force Approach

    Create object/hashmap to store all combinations
    Create a current sum equal to elements from iteration added together

    Three for loops that iterate over each item

        if currentSum === 0 && the current combination does not exist in hashmap && current combination's length === 3
            add combination to hashmap
            reset currentSum to empty array (use reduce to check currentSum)

*/

/*
    Recursive/Backtracking Approach

    Create global hashmap to store sequences

    base case: if current combination array's length === 3
                 if sum of element's in combination === 0 && hashmap does not contain sequence
                    add sequence to hashmap and return
                 else
                    return

    recursive case:

        iterate over each element in the array
            add item to currentSumArray
                slice array from i and recurse
                add element back to array from having been sliced
    
    return hashmap.values

*/

const threeSum = nums => {
    if (!nums.length) {
        return null
    }

    let hash = {}
    let sequences = []

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const a = nums[i]
                const b = nums[j]
                const c = nums[k]
                const set = [a, b, c]
                let sortedSet = set.sort()

                if (a + b + c === 0 && !hash[sortedSet]) {
                    sequences.push(sortedSet)
                    hash[sortedSet] = true
                }
            }
        }
    }

    return sequences
};