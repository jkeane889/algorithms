/*
    Given two strings A and B, find the minimum number of times A
    has to be repeated such that B is a substring of it. 
    
    If no such solution, return -1.

    For example, with A = "abcd" and B = "cdabcdab".

    Return 3, because by repeating A three times (“abcdabcdabcd”), 
    B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

    Note:
    The length of A and B will be between 1 and 10000.

*/

/*
    I - two strings of varied length
    O - number of times A string has to be repeated so that B string is a substirng
    of A string
    C - linear time complexity to iterate over string
    E - either string with zero length; B-string is never a substring; A-string is
    never a super-string

*/

/*
    set global variable for number of A strings
    A string copy

    Iterate over A string
        slice from A starting at index[i] for the length of B
        if returned string has no length
            increase number of A string by one and concat A string to A string copy
        
        if returned string is not empty
            compare it to B string
            if sliced string and B are the same
                return number of A strings

*/

const repeatedStringMatch = (A, B) => {
    let stringCounter = 1
    let potentialA = A

    while (potentialA.length < B.length) {
        potentialA += A
        stringCounter += 1
    }

    if (potentialA.includes(B)) {
        return stringCounter
    } else {
        potentialA += A
        stringCounter += 1
    }

    if (potentialA.includes(B)) {
        return stringCounter
    } else {
        return -1 
    }
};