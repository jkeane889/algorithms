// Valid Parenthesis String

/*
    Given a string containing only three types of characters: '(', ')' 
    and '*', write a function to check whether this string is valid. 
    
    We define the validity of a string by these rules:

    - Any left parenthesis '(' must have a corresponding right parenthesis ')'
    - Any right parenthesis ')' must have a corresponding left parenthesis '('
    - Left parenthesis '(' must go before the corresponding right parenthesis ')'
    
    '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.

    An empty string is also valid.

    Example 1:
    Input: "()"
    Output: True

    Example 2:
    Input: "(*)"
    Output: True

    Example 3:
    Input: "(*))"
    Output: True

    Note:
    - The string size will be in the range [1, 100].

*/

/*
    I - string consisting of parenthesis and "*"
    O - boolean indicating whether string is valid based on rules
    C - linear over the input string
    E - multiple "*" in input string
*/

/*
    Create a stack to store parenthesis 

    Iterate over input string
        if current element === "(" || "*"
            push into parensStack
        
        if current element === ")"
            pop off element from stack
            if popped element === "(" || "*"
                great, pair off continue iterating
            
        if current element === "*"  
            push into parensStack

    if !stack.length
        return true
    else 
        return false

*/

const checkValidString = s => {
    let stringArr = s.split('')
    let openParens = []
    let stars = []
    
    if (!s.length) {
        return true
    }

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === "(") {
            openParens.push(i)
        }

        if (stringArr[i] === "*") {
            stars.push(i)
        }

        if (stringArr[i] === ")" && openParens.length) {
            openParens.pop()
        }
        
        if (stringArr[i] === ")") {
            if (openParens.length) {
                openParens.pop()
            } else if (stars.length) {
                stars.pop()
            } else {
                return false
            }
        }
    }

    while (!openParens.length) {
        if (!stars.length) {
            return false
        } else if (openParens[openParens.length - 1] < stars[stars.length - 1]) {
            openParens.pop()
            stars.pop()
        } else {
            return false
        }
    }

    return true
};