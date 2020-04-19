// Search in Rotated Sorted Array

/*
    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    You are given a target value to search. If found in the array return its index, otherwise return -1.

    You may assume no duplicate exists in the array.

    Your algorithm's runtime complexity must be in the order of O(log n).

    Example 1:

        Input: nums = [4,5,6,7,0,1,2], target = 0
        Output: 4
    
    Example 2:

        Input: nums = [4,5,6,7,0,1,2], target = 3
        Output: -1
*/

/*
    I - unsorted array of varied integers and a target value
    O - index of target value from the array
    C - O(log n)
    E - empty array
*/

/*
    Create an inner recursive function

        DFS array and pass in iterator from firstIteration (this will be the index you return)

        if arr.length === 0
            return -1

        iterate over elements in array
            if element === target
                return passed down iterator value
            else
                return dfs recurse and slice from current index

*/

const search = (nums, target) => {
    let found;

    if (!nums.length) {
        return -1
    }

    const findElement = (arr, target, index, firstIteration = true) => {
        if (!arr.length) {
            return
        }
        
        if (firstIteration) {
            index = 0
        } else {
            index += 1
        }

        if (arr[0] === target) {
            found = index
            return
        } else {
            return findElement(arr.slice(1), target, index, firstIteration = false)
        }
    }

    findElement(nums, target, null, true)
    
    if (found !== undefined) {
        return found
    } else {
        return -1
    }
};