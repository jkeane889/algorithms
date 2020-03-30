// Letter Case Permutation

/*
    Given a string S, we can transform every letter individually to be lowercase 
    or uppercase to create another string.  
    
    Return a list of all possible strings we could create.

    Examples:
    Input: S = "a1b2"
    Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

    Input: S = "3z4"
    Output: ["3z4", "3Z4"]

    Input: S = "12345"
    Output: ["12345"]
    Note:

    S will be a string with length between 1 and 12.
    S will consist only of letters or digits.
*/

/*
    I - string with varied length
    O - all permutations of each string character either lowercased or uppercased
    C - time complexity of iterating over each character (linear) and utilizing recursion (quadratic)
    E - string without any letter characters, string without a length 

*/

/*
    Recursive backtracking to create permutations of string

        Create set/object to store all unique permutations of string
        
        Create inner recursive function and pass in empty string
        
        base case: if permutation.length === original string.length
                        !permutation not in set/object
                            add to set/object
                            return
                        else 
                            return

        recursive case:

            iterate over each element in string
                if element is not included in string
                    if element's type is not of type string
                        add to string
                    else 
                        lowercase element and push into string
                        recurse
                        uppercase element and push into string
                        recurse

*/

const letterCasePermutation = (string) => {
    let permutations = {}
    let stringArr = string.split('');

    const getStringPerms = str => {
        if (str.length === stringArr.length) {
            if (!permutations[str]) {
                permutations[str] = true
            }
        }

        for (let i = 0; i < strArr.length; i++) {
            if (typeof strArr[i] === 'string') {
                let lowerCase = strArr[i].toLowerCase();
                let upperCase = strArr[i].toUpperCase();
                if (strArr[i] === lowerCase) {
                    getStringPerms(str.push(upperCase))
                } else {
                    getStringPerms(str.push(lowerCase))
                }
            } else {
                str.push(str[i])
            }
        }
    }

    getStringPerms([])
    return Object.values(permutations)
};