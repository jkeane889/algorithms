// Perform String Shifts

/*
    You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

    - direction can be 0 (for left shift) or 1 (for right shift). 
    - amount is the amount by which string s is to be shifted.
    - A left shift by 1 means remove the first character of s and append it to the end.
    - Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.

    Return the final string after all operations.

    Example 1:

    Input: s = "abc", shift = [[0,1],[1,2]]

    [[-1, -1]]
    [[ 1,  2 ]]
    ----------
       0, 1 -> [1, 1] ... if greater than or equal to zero, right shift, if less than zero, left shift

    Output: "cab"
    
    Explanation: 
        [0,1] means shift to left by 1. "abc" -> "bca"
        [1,2] means shift to right by 2. "bca" -> "cab"
    
    Example 2:

    Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]

    [ 1,  1]
    [ 1,  1]
    [-1, -2]
    [ 1,  3]
    --------
      2,  3 ---> right shift, 3 times
                1 "abcdefg" ->  "gabcdef"
                2 "gabcdef" ->  "fgabcde"
                3 "fgabcde" ->  "efgabcd"

    Output: "efgabcd"
    
    Explanation:  
        [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
        [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
        [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
        [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
    
    Constraints:

    - 1 <= s.length <= 100
    - s only contains lower case English letters.
    - 1 <= shift.length <= 100
    - shift[i].length == 2
    - 0 <= shift[i][0] <= 1
    - 0 <= shift[i][1] <= 100

*/

/*
    I - string and matrix of shifts
    O - updated string with letters shifted based on matrix directions
    C - time complexity of shifting and rearranging letters (constant time)
    E - given an empty string or given an empty matrix of shifts

*/

/*
    Create a variable to equal shift direction
    Create a variable to equal total amount of shifts

    Iterate over shift matrix
        if element[0] === 0
            replace it with -1
            and multiply element[1] by -1

    Iterate back over updated matrix shift array
        add element[0] to shift direction total
        add element[1] to total amount of shifts
    
    if shift direction >= 0 (right shifts)
        while i < total amount of shifts
            perform right shifts on given word

    if shift direction < 0 (left shifts)
        while < total amount of shifts
            perform left shifts on given word
    
    return shifted word

*/

const stringShift = (s, shift) => { 
    let shiftTotal = 0

    for (let i = 0; i < shift.length; i++) {
        let direction = shift[i][0]
        let amount = shift[i][1]
     
        if (direction === 0) {
            shiftTotal -= amount
        } else {
            shiftTotal += amount
        }
    }

    let newFront;
    let newBack;

    if (shiftTotal < 0) {
        shiftTotal = Math.abs(shiftTotal) % s.length
        newFront = s.substring(shiftTotal)
        newBack = s.substring(0, shiftTotal)
    } else if (shiftTotal > 0) {
        shiftTotal = Math.abs(shiftTotal) % s.length
        newFront = s.substring(s.length - shiftTotal, s.length)
        newBack = s.substring(0, s.length - shiftTotal)
    } else {
        return s
    }

    return newFront + newBack
};