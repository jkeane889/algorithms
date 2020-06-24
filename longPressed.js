/*
    Your friend is typing his name into a keyboard.  
    Sometimes, when typing a character c, the key might get long pressed, 
    and the character will be typed 1 or more times.

    You examine the typed characters of the keyboard.  
    Return True if it is possible that it was your friends name, 
    with some characters (possibly none) being long pressed.

    Example 1:

    Input: name = "alex", typed = "aaleex"
    Output: true
  
    Explanation: 'a' and 'e' in 'alex' were long pressed.

    Example 2:

    Input: name = "saeed", typed = "ssaaedd"
    Output: false
  
    Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

    Example 3:

    Input: name = "leelee", typed = "lleeelee"
    Output: true

    Example 4:

    Input: name = "laiden", typed = "laiden"
    Output: true
  
    Explanation: It's not necessary to long press any character. 

    Constraints:
        1 <= name.length <= 1000
        1 <= typed.length <= 1000
        The characters of name and typed are lowercase letters.

*/

/*
    global tracker for longPressed = true

    Iterate over input name

    Create an object to store potentially long typed characters

    if current character and next character are the same
        add this character to long type character object
    
    Then iterate over typed characters
        if current character and next character are the same
            and there is a property inside object for these
                longedPressed = true
                remove property from object

        if current character and next character are the same
                and there IS NOT a property inside object for these
                    longedPressed = false
    
    if Object.values.length of object
        return false

    As we go, we're removing properties from object so that it should
        be empty once we've iterated through each potentially long typed
        character

*/

/*
    I - name and typed name with potentially long typed characters
    O - boolean indicating whether characters were long typed
    C - linear time complexity
    E - given a blank name; no double typed characters

*/

const isLongPressedName = (name, typed) => {
    if (!name.length || !typed.length) {
        return null
    }

    if (name === typed) {
        return true
    }

    if (name.length > typed.length) {
        return false
    }

    let p = 0;
    let i = 0;

    while (i < name.length && p < typed.length) {
        if (name[i] === typed[p]) {
            i++
        }

        p++
    }

    return i === name.length
}