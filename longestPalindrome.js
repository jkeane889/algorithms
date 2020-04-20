// Longest Palindromic Substring

/*
    Given a string s, find the longest palindromic substring in s. 
    You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    
    Note: "aba" is also a valid answer.
    
    Example 2:

    Input: "cbbd"
    Output: "bb"

*/

/*
    I - string of varied length
    O - longest palindromic substring
    C - time complexity (linear iteration over all characters in string)
    E - given an empty string; multiple palindromes inside of string of the same length

*/

/*
    Create helper palindrome checker function
        Iterate over input from start to finish & then from end to start
            if it is the same backwards and forward, return true, else return false

    Create longestPalindrome equal to null
    Create current palindrome = ''

    Create inner recursive function
        base case:  if !string array.length
                        return
        
        recursive case:

            iterate over each element in the string array
                if current palindrome === '' && firstIteration
                    grab the current character and add it to current palindrome
                    call helper function on current palindrome
                    if true && current.length > longestPalindrome.length
                        longestPalindrome = current
                        dfs (currentPalindrome, array.slice(i))
                        if firstIteration
                            currentPalindrome = ''
                    else
                        dfs (currentPalindrome, array.slice(i))
                        currentPalindrome = ''
            
*/

const longestPalindrome = s => {
    if (!s.length) {
        return null
    }
    
    let current;
    let maxPalindrome = ''
    let stringArray = s.split('')

    const isPalindrome = potential => {
        let reversed = ''

        for (let i = potential.length - 1; i >= 0; i--) {
            reversed += potential[i]
        }

        return (potential === reversed) ? true : false
    }

    const dfs = (stringArr, firstIteration = true) => {
        if (!stringArr.length) {
            return
        }

        for (let i = 0; i < stringArr.length; i++) {
            if (firstIteration) {
                current = ''
                current += stringArr[i]
                if (isPalindrome(current) && current.length > maxPalindrome.length) {
                    maxPalindrome = current
                }
                dfs(stringArr.slice(i + 1), false)
            } else {
                current += stringArr[i]
                if (isPalindrome(current) && current.length > maxPalindrome.length) {
                    maxPalindrome = current
                }
            }
        }
    }

    dfs(stringArray, true)
    return maxPalindrome
};