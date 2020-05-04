// Ransom Note

/*
    Given an arbitrary ransom note string and another string containing letters from all the magazines, 
    write a function that will return true if the ransom note can be constructed from the magazines; 
    otherwise, it will return false.

    Each letter in the magazine string can only be used once in your ransom note.

    Note:
    You may assume that both strings contain only lowercase letters.

    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true

*/

/*
    Iterate over magazine string with i
        Iterate over magazine string with j
            if substring(i, j) of magazine string === ransom note
                return true


    return false

*/

const canConstruct = (ransomNote, magazine) => {
    if (ransomNote === "") {
        return true
    }

    let charOptions = {}
    let ransomNoteQueue = ransomNote.split('')

    for (let i = 0; i < magazine.length; i++) {
        if (!charOptions[magazine[i]]) {
            charOptions[magazine[i]] = 1
        } else {
            charOptions[magazine[i]] += 1
        }
    }

    while (ransomNoteQueue.length) {
        let letter = ransomNoteQueue.shift()

        if (charOptions[letter]) {
            charOptions[letter] -= 1
        } else {
            return false
        }
    }

    return true
};
