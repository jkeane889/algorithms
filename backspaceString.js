// Backspace String Compare

/*
    Given two strings S and T, return if they are equal when both are typed into empty text editors. 
    # means a backspace character.

    Example 1:

    Input: S = "ab#c", T = "ad#c"
    Output: true
    
    Explanation: Both S and T become "ac".
    
    Example 2:

    Input: S = "ab##", T = "c#d#"
    Output: true
    
    Explanation: Both S and T become "".
    
    Example 3:

    Input: S = "a##c", T = "#a#c"
    Output: true
    
    Explanation: Both S and T become "c".
    
    Example 4:

    Input: S = "a#c", T = "b"
    Output: false
    
    Explanation: S becomes "c" while T becomes "b".
    
    Note:
    1 <= S.length <= 200
    1 <= T.length <= 200
    S and T only contain lowercase letters and '#' characters.
    Follow up:

    Can you solve it in O(N) time and O(1) space?
*/

/*
    I - two strings with varied lengths and potential backspacing
    O - boolean indicating whether strings are same length or not
    C - linear time and constant space
    E - no backspaces included in strings
*/

/*
    Create a helper function that will output updated string

        create an array from input string

        iterate over input string array
            if i === #
                splice i - 1 character from array

        return input string

    In main function

        call helper function for string S
        call helper function for string T

        if returned values and their lengths are equal
            return true
        else
            return false

*/

const backspaceCompare = (S, T) => {
    if (!S.length || !T.length) {
        return false
    }

    const build = (S) => {
        let st = [];        
        for (let i = 0, len = S.length; i < len; ++ i) {
            if (S[i] == '#') {
                st.pop(); // if called on empty array, return undefined.
            } else {
                st.push(S[i]);
            }
        }
        return st.join('');
    }
    
    return build(S) === build(T);
};

let S1 = "ab#c" 
let T1 = "ad#c"
let S2 = "ab##" 
let T2 = "c#d#"
let S3 = "a##c" 
let T3 = "#a#c"
let S4 = "a#c" 
let T4 = "b"

// console.log(backspaceCompare(S1, T1))
// console.log(backspaceCompare(S2, T2))
// console.log(backspaceCompare(S3, T3))
// console.log(backspaceCompare(S4, T4));