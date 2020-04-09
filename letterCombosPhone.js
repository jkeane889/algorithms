// Letter Combinations of a Phone Number

/*
    Given a string containing digits from 2-9 inclusive, 
    return all possible letter combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.

    Example:

    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

    Note:
    Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

/*
    I - string including digits 2 - 9
    O - all possible letter combinations the number could represent
    C - recursive DFS backtracking
    E - empty string given
*/

/*
    Create a storage array for all number combinations

    Create an inner recursive function

        base case: if input.length === string.length
            add input to storage array
            return
            
        recursive case:

            if !string.parameter
                comboString = ""

            iterate over input arr of integers
                add integer to combo string
                recurse
                pop off element from combostring

*/

const letterCombinations = digits => {
    const phoneDigitsToLetters = {
        0: '0',
        1: '1',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    let adString = '';
    let combinations = [];
        
    if (digits === "") {
        return []
    }

    let createNumber = function(num) { // 
        if (adString.length === digits.length) {
            return combinations.push(adString);
        } else {
            let char = num[0]; // 
            
            if (char === '0' || char === '1') { //
                adString += phoneDigitsToLetters[char];
                createNumber(num.slice(1)); //
            } else {
                let options = phoneDigitsToLetters[char]; // 

                for (var i = 0; i < options.length; i++) { // 
                    adString += options[i]; // 
                    createNumber(num.slice(1)); //
                    adString = adString.slice(0, adString.length - 1);
                }
            }
        }
    }

    createNumber(digits); // 
    return combinations;
};

console.log(letterCombinations("234"))
