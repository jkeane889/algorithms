// Counting Elements

/*
    Given an integer array arr, count element x such that x + 1 is also in arr.

    If there're duplicates in arr, count them seperately.

    Example 1:

    Input: arr = [1,2,3]
    Output: 2

    Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

    Example 2:

    Input: arr = [1,1,3,3,5,5,7,7]
    Output: 0

    Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

    Example 3:

    Input: arr = [1,3,2,3,5,0]
    Output: 3

    Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

    Example 4:

    Input: arr = [1,1,2,2]
    Output: 2

    Explanation: Two 1s are counted cause 2 is in arr.
    

    Constraints:

    1 <= arr.length <= 1000
    0 <= arr[i] <= 1000

*/

/*
    I - array of unsorted integers
    O - count of how many "x + 1" items exist in array
    C - linear time complexity
    E - empty array; no elements that have their corresponding
        "x + 1" value
*/

/*

    Create global count value initialized to zero
    Create global object to store every integer's next value

    iterate over given integer array
        add one to each element given and add this element and its next value to global object

    Iterate over elements in given array
        let temporaryNext = current element + 1
        if element[i] === temporaryNext
            globalCount += 1
        
        if i === array.length - 1
            array.shift
            array = array
            i = 0

*/

const countElements = arr => {
    let hash = {}
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true
        }
    }

    for (let j = 0; j < arr.length; j++) {
        let next = parseInt(arr[j]) + 1
        if (hash[next]) {
            count += 1
        }
    }

    return count
};