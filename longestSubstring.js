// Longest Substring Without Repeating Characters

/*
    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 

    Explanation: The answer is "abc", with the length of 3. 

    Example 2:

    Input: "bbbbb"
    Output: 1

    Explanation: The answer is "b", with the length of 1.

    Example 3:

    Input: "pwwkew"
    Output: 3

    Explanation: The answer is "wke", with the length of 3. 
  
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/*
    I - string with potential repeating characters
    O - longest substring without repeating characters
    C - linear time complexity??
    E - given an empty string
*/

/*
    Create a longest variable to store longest substring
    create currentString as an empty object for current substring
    convert string to an array 

    iterate over stringArr elements
        if currentString object does not contain stringArr element
            currentString[element] = true
        else
            convert currentString object to string
            check if its length is greater than max substring
                if it is
                    set max substring to currentString
                else
                    i = length of current string element
                    currentStrObj = {}            
                    break
    
    return maxSubstring.length
*/

const lengthOfLongestSubstring = s => {
    if (s === " ") {
        return 1
    } else if (!s.length) {
        return 0
    }

    let maxSubstring = ''
    let currentStrObj = {}
    let strArr = s.split('')

    for (let i = 0; i < strArr.length; i++) {
        if (!currentStrObj[strArr[i]]) {
            currentStrObj[strArr[i]] = true
            if (!maxSubstring.length) {
                maxSubstring = Object.keys(currentStrObj).join('')
            }
        } else {
            let currentStr = Object.keys(currentStrObj).join('')
            if (currentStr.length > maxSubstring.length) {
                maxSubstring = currentStr
            }

            let startInd = strArr.indexOf(strArr[i])
            
            strArr = strArr.slice(startInd + 1)
            i = -1
            currentStrObj = {}
        }
    }

    let currentString = Object.keys(currentStrObj).join('')

    if (currentString.length > maxSubstring.length) {
        return currentString.length
    } else {
        return maxSubstring.length
    }
}