// Single Number

/*
    Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    Example 1:

    Input: [2,2,1]
    Output: 1
    Example 2:

    Input: [4,1,2,1,2]
    Output: 4

*/

/*
    I - array of numbers with one non-repeating integer
    O - identified non-repeating integer
    C - linear time complexity/reduced memory use
    E - empty array, array without a single repeating number
*/

/*
    Create a global object

        Iterate over array elements
            if element does not exist in object
                create element in object and set equal to 1
            if element already exists in object
                add one to element in object

        iterate over values in object and remove element whose value is equal to one
        return element's key from object
*/

const singleNumber = nums => {
    let numsObj = {}
    let singleNum = null

    for (let i = 0; i < nums.length; i++) {
        if (!numbsObj[nums[i]]) {
            numbsObj[nums[i]] = 1
        } else if (numbsObj[nums[i]]) {
            numbsObj[nums[i]] += 1
        }
    }

    for (let key in numbsObj) {
        if (numbsObj[key] === 1) {
            singleNum = numbsObj[key]
        }
    }

    return singleNum
};