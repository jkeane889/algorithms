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
        
    const bfs = (targetWord, matrix, coordinate) => {
        let queue = []
        let height = matrix.length
        let length = matrix[0].length
        let visited = Array(height).fill(0).map(arr => Array(length).fill(false))
    
        let targetChars = targetWord.split('')
        let targetWordArr = targetWord.split('')
        let wordCopy = []
        
        queue.push(coordinate)

        let currentDirection = null
        let directions = {
            up: ["right", "left", "up"],
            down: ["right", "left", "down"],
            left: ["left", "down", "up"],
            right: ["right", "down", "up"]
        }

        while (queue.length) {
            let pos = queue.shift()
            let letter = matrix[pos[0]][pos[1]]
            let targetChar = targetChars.shift()

            if (letter === targetChar && !visited[pos[0]][pos[1]] && !currentDirection) {
                wordCopy.push(letter)
                visited[pos[0]][pos[1]] = true
                if (wordCopy.length === targetWordArr.length) {
                    return true
                }
            } else if (letter === targetChar && !visited[pos[0]][pos[1]] && directions[currentDirection].includes(currentDirection)) {
                wordCopy.push(letter)
                visited[pos[0]][pos[1]] = true
                if (wordCopy.length === targetWordArr.length) {
                    return true
                }
            }

            if (matrix[pos[0] + 1] && currentDirection !== "up") {
                let potential = matrix[pos[0] + 1][pos[1]]
                if (potential === targetChars[0]) {
                    queue.push([pos[0] + 1, pos[1]])
                    currentDirection = "down"
                }
            }

            if (matrix[pos[0] - 1] && currentDirection !== "down") {
                let potential = matrix[pos[0] - 1][pos[1]]
                if (potential === targetChars[0]) {
                    queue.push([pos[0] - 1, pos[1]])
                    currentDirection = "up"
                }
            }

            if (matrix[pos[0]][pos[1] + 1] && currentDirection !== "left") {
                let potential = matrix[pos[0]][pos[1] + 1]
                if (potential === targetChars[0]) {
                    queue.push([pos[0], pos[1] + 1])
                    currentDirection = "right"
                }
            }

            if (matrix[pos[0]][pos[1] - 1] && currentDirection !== "right") {
                let potential = matrix[pos[0]][pos[1] - 1]
                if (potential === targetChars[0]) {
                    queue.push([pos[0], pos[1] - 1])
                    currentDirection = "left"
                }
            }
        }

        return false
    };


    let firstLetter = word[0]
    let contained = false

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (firstLetter === board[i][j]) {
                contained = bfs(word, board, [i, j])
                if (contained) {
                    return true
                }
            }
        }
    }

    return contained
};