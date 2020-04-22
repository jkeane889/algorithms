// Permutations

/*
    Given a collection of distinct integers, return all possible permutations.

    Example:

    Input: [1,2,3]
    Output:
            [
                [1,2,3],
                [1,3,2],
                [2,1,3],
                [2,3,1],
                [3,1,2],
                [3,2,1]
            ]

*/

/*
    I - an array of distinct integers
    O - an array containing arrays of permutations of original input array
    C - time complexity of DFS and iteration (quadratic?)
    E - given an empty array; avoid repeating permutations

*/

/*
    DFS Backtracking

    Create storage array as global variable

    Create inner recursive function
        base case: if array's length === input array's length
                    push current array into storage array
                    return
        
        recursive case:
            if !input array length
                slice given array

            iterate over elements in copied array
                if !indexOf.array[i] in empty array
                    push element into empty array
                    recurse

*/

const permute = nums => {
    let storage = []
    
    const getPermutations = (arr, firstIteration = true) => {
        if (arr.length === nums.length) {
            let numsCopy = arr.slice()
            storage.push(numsCopy)
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (firstIteration) {
                arr = [nums[i]]
                getPermutations(arr, false)
            }

            if (!arr.includes(nums[i])) {
                arr.push(nums[i])
                getPermutations(arr, false)
                arr.pop()
            }
        }
    }

    getPermutations([], true)
    return storage
};