// Bitwise AND of Numbers Range

/*
    Given a range [m, n] where 0 <= m <= n <= 2147483647, 
    return the bitwise AND of all numbers in this range, inclusive.

    Example 1:

    Input: [5,7]
    Output: 4
    
    Example 2:

    Input: [0,1]
    Output: 0

*/

/*
    I - array with two elements, [m, n], where "m" is starting integer and "n" is ending integer
    O - return bitwise AND of all numbers between m and n, inclusive
    C - linear time complexity in iterating through all numbers in range
    E - negative numbers and their impact on bitwise AND operator??

*/

/*

    Create global variable to store final bitwise AND combination

    Starting with m, iterate over all elements while 0 <= n
        perform bitwise AND operation between current element and next element,
        and store result in global bitwise AND variable

*/

// ORIGINAL SOLUTION 

const rangeBitwiseAnd = (m, n) => {
    let result;

    for (let i = m; i <= n; i++) {
        if (result === undefined && (i + 1)) {
            result = i & n
        } else if (result === undefined) {
            result = i & (i + 1)
        } else {
            result = result & i
        }
    }

    return result    
};


// FASTER AND IDEAL SOLUTION

let count = 0
    
while (m !== n) {
    
    m >>= 1;
    n >>= 1;
    
    count++
}

return m << count