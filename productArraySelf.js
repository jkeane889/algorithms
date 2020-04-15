// Product of Array Except Self

/*
    Given an array nums of n integers where n > 1,  
    return an array output such that output[i] is equal 
    to the product of all the elements of nums except nums[i].

    Example:

    Input:  [1,2,3,4]
    Output: [24,12,8,6]
    
    Constraint: It's guaranteed that the product of the elements of 
                any prefix or suffix of the array (including the whole array) 
                fits in a 32 bit integer.

    Note: Please solve it without division and in O(n).

    Follow up:
    Could you solve it with constant space complexity? 
    (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

/*
    I - array of n integers where n > 1
    O - the product of all elements of nums expect nums[i]
    C - linear time complexity - O(n)
    E - given an empty array
*/

/*
    Create any empty array to store the products of the elements in the array
    
    Create copy of original array and insert a 1 into the front of the array
        so that array[i] does not get included in computation

    while productArray's length < originalArray's length
        create product variable equal to 1

        let i = 1

        iterate over input array
            if j !== i
                product = current element by product variable

            if j === input array.length - 1
                push product variable into new product array
                add 1 to i
                reset product variable 1
                reset j to 0

    input = [1,2,3,4]
    add One -> [1,1,2,3,4]

    product = 1
    i = 1

*/

const productExceptSelf = (nums) => {
    let productArr = []
    let numsCopy = nums.slice()
    numsCopy.unshift(1)

    let i = 1
    let currentProduct = 1

    for (let j = 0; j < numsCopy.length; j++) {
        if (j !== i) {
            currentProduct *= numsCopy[j]
        }

        if (j === numsCopy.length - 1) {
            productArr.push(currentProduct)
            i += 1
            j = -1
            currentProduct = 1
        }

        if (productArr.length === nums.length) {
            break;
        }
    }

    return productArr
};