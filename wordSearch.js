// Word Search

/*
    Given a 2D board and a word, find if the word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cell,
    where "adjacent" cells are those horizontally or vertically neighboring.
    
    The same letter cell may not be used more than once.

    Example:

    board =
            [
                ['A','B','C','E'],
                ['S','F','C','S'],
                ['A','D','E','E']
            ]

    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.

    Constraints:

    board and word consists only of lowercase and uppercase English letters.
    1 <= board.length <= 200
    1 <= board[i].length <= 200
    1 <= word.length <= 10^3
*/

/*
    I - matrix (array of arrays) that contains letters as elements, and a word as string
    O - boolean value indicating whether given word exists in matrix of words
    C - given above; time/space complexity (maybe linear?)
    E - given an empty matrix or an empty word

*/

/*
    BFS recursion

    Create global contains variable initialized to false
    Create variable equal to first letter in given word

    Iterate over matrix
        Iterate over current array from matrix
            if current element equals first letter
                call bfs function and pass in index/coordinate of current element, letter and matrix

    Create a bfs helper function
        Create a queue
        Create a variable called height equal to matrix.length
        Create a variable called length equal to matrix[0].length
        
        Create a visited array with all values set to value given the matrices length and height

        Create a variable called wordCopy initialized to empty string

        push the coordinate of the letter into the queue

        while the queue.length && wordCopy.length < originalWord.length
                
                if a top element exists
                    check to see if it's equal to the letter in the word
                    if it does
                        add letter to wordCopy
                        add it's top coordinate, left and right coordinate to the queue
                
                if a right element exists
                    check to see if it's equal to the letter in the word
                        if it does
                            add letter to wordCopy
                            add it's top coordinate, left and right coordinate to the queue

                if a left element exists
                    check to see if it's equal to the letter in the word
                        if it does
                            add letter to wordCopy
                            add it's top coordinate, left and right coordinate to the queue

                if a bottom element exists
                    check to see if it's equal to the letter in the word
                            if it does
                                add letter to wordCopy
                                add it's top coordinate, left and right coordinate to the queue
        
        if wordCopy === originalWord
            return true
        else 
            return false
*/

const exist = (board, word) => {

    const dfs = (i, j, I) => {
        if (I >= word.length) {
            return true
        }

        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
            return false
        }

        if (board[i][j] !== word[I]) {
            return false
        }

        if (board[i][j] === '*') {
            return false
        }

        board[i][j] = '*'

        let res = (dfs(i, j + 1, I + 1) || dfs(i, j - 1, I + 1) || dfs(i + 1, j, I + 1) || dfs(i - 1, j, I + 1))

        board[i][j] = word[I]
        return res
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }

    return false
};