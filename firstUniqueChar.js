// First Unique Character in a String

/*
    Given a string, find the first non-repeating character in it
    and return it's index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
    Note: You may assume the string contain only lowercase letters.

*/

/*
    I - string with varied characters comprising of word
    O - index of first non-repeating character
    C - linear time complexity with iterating over values of string
    E - given an empty string; no non-repeating characters (return -1)

*/

/*
    Create a new Map object to store all characters from string

    Iterate over characters and if map.get(character) === undefined
        map.set (character[i], 1)
        else 
        get current value and add one to it
    
    Iterate over map and its values
        return the first key whose value === 1

    return -1

*/

const firstUniqChar = s => {
    if (!s.length) {
        return -1
    }

    let stringMap = new Map()
    let stringArr = s.split('')

    for (let i = 0; i < stringArr.length; i++) {
        if (stringMap.get(stringArr[i]) === undefined) {
            stringMap.set(stringArr[i], [i, 1])
        } else {
            let value = stringMap.get(stringArr[i]);
            value[1] += 1
            stringMap.set(stringArr[i], value)
        }
    }

    for (let [key, value] of stringMap) {
        if (value[1] === 1) {
            return value[0]
        }
    }

    return -1
};