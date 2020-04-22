// Generate Parentheses

/*
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    For example, given n = 3, a solution set is:

    [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
    ]

*/

/*
    I - number representing the total amount of well formed parentheses to be created
    O - array of well-formed parentheses combinations
    C - linear time to generate parentheses
    E - given 0 as input (return empty array)

*/

/*
    DFS recursive algorithm looking at variation of cases

    1. inner parenthesis 
    2. contained parenthesis
    3. right parenthesis
    4. left parenthesis
    5. individual parenthesis

    Create global array to store parenthesis combinations

    Create inner recursive function that takes in parenthesis count and string

    base case:
        if remaining parenthesis equals 2
            return '()'
        
    if !firstIteration
        return "(" + dfs(count - 2) + ")"

    recursive cases:

        if !string.length
            create empty string

        if first iteration 

            inner parenthesis
                
                empty string = "(" + dfs(count - 2) + ")"

            contained parenthesis

                empty string = "(" + dfs(count - 2) + dfs(count - 2) + ")"

            right parenthesis

                empty string = "dfs(count - 2) + "(" + ")"

            left parenthesis

                empty string = "(" + ")" + dfs(count - 2)

            individual parenthesis

                empty string = "(" + ")" + dfs(count - 2)
*/

// Original Solution

// var generateParenthesis = function(n) {
//     let parensCombo = []

//     if (!n) {
//         return parensCombo
//     }
    
//     if (n === 1) {
//         return ['()']
//     }

//     const getParensCombos = (n, firstIteration = true) => {
//         if (n === 1) {
//             return '()'
//         }

//         if (!firstIteration) {
//             return '(' + getParensCombos(n - 1, false) + ')'
//         }

//         if (firstIteration) {
//             parensCombo.push('(' + getParensCombos(n - 1, false) + ')')
//             parensCombo.push('(' + getParensCombos(n - 2, false) + getParensCombos(n - 2, false) + ')')
//             parensCombo.push(getParensCombos(n - 1, false) + '()')
//             parensCombo.push('()' + getParensCombos(n - 1, false))

//             let emptyStr = ''
//             for (let i = 0; i < n; i++) {
//                 emptyStr += '()'
//             }
//             parensCombo.push(emptyStr)
//         }
//     }

//     getParensCombos(n, true)
//     return parensCombo
// };

// SOLUTION CODE

const generateParenthesis = n => {
    let result = []

    const parens = (left, right, str, result) => {
        if (left === 0 && right === 0) {
            result.push(str)
        }

        if (left > 0) {
            parens(left - 1, right + 1, str + "(", result)
        }

        if (right > 0) {
            parens(left, right - 1, str + ")", result)
        }
    }

    parens(n, 0, "", result)
    return result
}