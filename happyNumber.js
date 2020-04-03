// Happy Number

/*
    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: 
    
    Starting with any positive integer, replace the number by
    the sum of the squares of its digits, and repeat the process
    until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1. 
    
    Those numbers for which this process ends in 1 are happy numbers.

    Example: 

    Input: 19
    Output: true
    
    Explanation: 
    
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1

*/

/*
    I - integer
    O - boolean indicating whether a number is "happy" -> where the sum of
        the squares of its digits equals 1
    C - time complexity (recursion)
    E - input equals null, 0, or 1 
*/

/*
    Create global boolean value to represent if a number is happy, initialized to false

    Create inner recursive function

    base case: if number > Number.MAX_SAFE_INTEGER
        return boolean value equal to false

    recursive case:

        take input number and split it into array
        reduce(return accum + Math.pow(element, 2))
        if (total === 1) {
            happy boolean value equals true
        } else {
            recurse with new sum
        }

*/

const isHappy = n => {
    let seen = {}

    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = maybeHappy(n)
    }

    return n === 1 ? true : false
}

const maybeHappy = num => {
    return num.toString().split('').reduce((sum, num) => {
        return sum + Math.pow(num, 2)
    }, 0)
}