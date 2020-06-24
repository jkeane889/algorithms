/*
    Given an array nums of n integers, are there elements a, b, c
    in nums such that a + b + c = 0? 
    
    Find all unique triplets in the array which gives the sum of zero.

    Note:

    The solution set must not contain duplicate triplets.

    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
        [
            [-1, 0, 1],
            [-1, -1, 2]
        ]

*/

/*
    I - array of unsorted integers
    O - array of arrays where each sub array is a triplet sequence that sums to zero
    C - time complexity (multiple traversals through array)
    E - empty array; no sequences of 3 that equal zero; duplicate sequences
*/

/*
    Create global storage array for triplet subsequences

    Brute-Force Approach

        Create sum = null

        Iterate over array with for loop
            iterate over array with inner for loop (while i < i - 1)
                iterate over array again with another inner for loop (while i < i - 2)
                    create a new array
                        if new array.length < 3
                            push in element
                        else if array.length === 3
                            check if sum of element in array === 0
                                if they do, add this array to sums array
                            else
                                remove last element from array
                    
        return array of arrays with triplet sequences
*/

// Initial attempt

const threeSum = (nums) => {
    if (!nums.length) {
        return []
    }

    let sums = {}

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let newSum = []
                newSum.push(nums[i], nums[j], nums[k])
                let sum = newSum .reduce((acc, val) => {
                    return acc + val
                })

                if (sum === 0) {
                    newSum.sort()
                    sums[newSum] = newSum
                }
            }
        }
    }

    return Object.values(sums)
};

// Accepted Solution

var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort(function(a,b) {return a-b});
    const ans = {};
    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];
        var l = i+1;
        var r = nums.length-1;
        if (target === 0 && nums[l] === 0 && nums[r] === 0 && l !==r) {
            const sol = [nums[i], nums[l], nums[r]];
            ans[sol] = 1;
            continue;
        }
        while(l < r) {
            let sum = nums[l]+nums[r];
            if (sum === target) {
                const sol = [nums[i], nums[l], nums[r]];
                const sorted = sol.sort();
                ans[sorted] = 1;
            }
            if(sum < target) l++;
            else r--;
        }
    }
    return Object.keys(ans).map(k => k.split(',').map(k => Number(k)));
};