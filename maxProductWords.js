// Maximum Product of Word Lengths

/*
    Given a string array words, find the maximum value of length(word[i]) * length(word[j]) 
    where the two words do not share common letters. 

    You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

    Example 1:

        Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
        Output: 16 

        Explanation: The two words can be "abcw", "xtfn".

    Example 2:

        Input: ["a","ab","abc","d","cd","bcd","abcd"]
        Output: 4 

        Explanation: The two words can be "ab", "cd".

    Example 3:

        Input: ["a","aa","aaa","aaaa"]
        Output: 0 

        Explanation: No such pair of words.

*/

/*
    I - array of strings
    O - max product of word1.length x word2.length, where neither word share any common letters
    C - time complexity of dynamic programming solution
    E - words contain all the same letter (0); blank array of words given

*/

/*
    create variable maxWord1
    create variable maxWord2

    Create a dynamic programming helper function to be called for each and every other word

        Create matrix variable, i and j

        iterate over a string's length
            create array for each element

        iterate over b string's length
            create element in arrayA[0]'s position for b

        iterate over b length
            iterate over a length
                if character at b === character at a
                    matrix[i][j] = matrix[i - 1][j - 1]
                else 
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)                    

    Iterate over word's array
        Iterate over word's array to look at every other word
            pass in both words
            if both words are different
                compare word1's length to maxWord1's.length 
                if greater, set maxWord to word1

                compare word2's length to maxWord2's.length 
                if greater, set maxWord to word2

    return maxWord1.length * maxWord2.length

*/

const maxProduct = words => {
    if (!words || !words.length) {
        return null
    }

    let wordOneLen = 0
    let wordTwoLen = 0
    let maxProduct = wordOneLen * wordTwoLen  

    const checkWords = (wordOne, wordTwo) => {
        if (!wordOne.length && !wordTwo.length) {
            return [0, 0]
        }

        let matrix = [], i, j;

        for (i = 0; i <= wordOne.length; i++) {
            matrix[i] = [i]
        }

        for (j = 0; j <= wordTwo.length; j++) {
            matrix[0][j] = j
        }

        for (i = 1; i <= wordOne.length; i++) {
            for (j = 1; j <= wordTwo.length; j++) {
                if (wordOne.charAt(i - 1) === wordTwo.charAt(j - 1)) {
                    return [0, 0]
                }
            }
        }

        return [wordOne.length, wordTwo.length]
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let lens = checkWords(words[i], words[j])
            let currentProduct = lens[0] * lens[1]
            
            if (currentProduct > maxProduct) {
                wordOneLen = lens[0]
                wordTwoLen = lens[1]
                maxProduct = currentProduct
            }
        }
    }

    return wordOneLen * wordTwoLen
};