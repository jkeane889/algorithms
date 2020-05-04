// Number Complement

/*
    Given a positive integer, output its complement number. 
    The complement strategy is to flip the bits of its binary representation.

    Example 1:

    Input: 5
    Output: 2
    Explanation: The binary representation of 5 is 101 (no leading zero bits), 
    and its complement is 010. So you need to output 2.
    

    Example 2:

    Input: 1
    Output: 0
    Explanation: The binary representation of 1 is 1 (no leading zero bits), 
    and its complement is 0. So you need to output 0.
    

    Note:

    The given integer is guaranteed to fit within the range of a 32-bit signed integer.
    You could assume no leading zero bit in the integer’s binary representation.
    This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

*/

/*
    I - positive integer
    O - complement of integer whereby complement is the opposite of given integers bits
    C - time complexity? Consider max integer to perform binary calculations on
    E - no existing complement? Not sure if this is an edge case

*/

/*
    Utilize the binary operators to right/left shift binary elements
    given positive integer (would we use XOR here?)

*/

// Original Solution Attempt

const findComplement = num => {
    if (!Number.isInteger(num)) {
        return null
    } else {
        return num >>> 1
    }
};

// Ideal solution

const findComplement = num => {
    let p = 1

    while (p < num) {
        p = 2 * p + 1
    }

    return (p ^ num)
};