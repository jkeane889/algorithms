// Group Anagrams

/*
    Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
            [
                ["ate","eat","tea"],
                ["nat","tan"],
                ["bat"]
            ]
    
    Note:
    All inputs will be in lowercase.
    The order of your output does not matter.
*/

/*
    I - array of strings that contain anagrams
    O - an array of arrays with all anagrams grouped inside corresponding array
    C - linear time
    E - empty array of inputs, no anagrams in input array

*/

/*
    Create a helper function called isAnagram
        function takes original word and test word
        create boolean value initialized to true

        iterates over original word
            if test word !contains element
                set boolean equal to false

        return boolean

    Create global array to store all grouped anagrams
    
    Create array to store anagrams

    Create function that iterates over array of given anagrams starting at index 1   
        set current word = array[0]
        pass current word and array[1] into helper function
        if true push into anagrams
        if i === array.length - 1
            shift off array[0]
            push anagrams array into global storage array
            make anagrams array = []
            i = -1


        const groupAnagrams = strs => {

        if (strs.length === 1) {
           return [strs]
        }
        
        const isAnagram = (origWord, possAnag) => {
            let anagram = true
            let origArr = origWord.split('')
            let possArr = possAnag.split('')

            if (origArr.length !== possArr.length) {
                return false
            }

            for (let i = 0; i < origArr.length; i++) {
                if (possArr.includes(origArr[i])) {
                    let index = possArr.indexOf(origArr[i])
                    possArr.splice(index, 1)
                } else {
                    anagram = false
                }
            }

            return anagram
        }

        const checkWords = words => {
            let allAnagrams = []
            let anagrams = []
            let currentWord = words[0]
        
            for (let j = 1; j < words.length; j++) {
                if (anagrams[0] !== currentWord) {
                    anagrams.push(currentWord)
                }

                if (isAnagram(currentWord, words[j])) {
                    anagrams.push(words[j])
                    words.splice(j, 1)
                    j--
                }

                if (j === words.length - 1) {
                    allAnagrams.push(anagrams)
                    words.shift()
                    currentWord = words[0]
                    anagrams = []
                    j = 0
                }
            }

            if (currentWord) {
                anagrams.push(currentWord)
                allAnagrams.push(anagrams)
            }

            return allAnagrams
        }

        return checkWords(strs)
    };

*/

/*
    Refactored (More Efficient Approach)

    Create helper function to create an object of all anagrams of input word to return
        Create anagram obj
        Create an array representing each character in input word
        Create an empty array to represent new anagram string
        Create copy of input string as an array
        Set currentChar = inputStringArrayCopy[0]

        Iterate over each character
            add currentChar to emptyStr
            if string array does not include character
                push into array
                if array.length === word.length && !anagramObj does not contain string array
                    join string and add to anagram obj
                    shift off element from array copy
                    set currentChar = to inputCopy[0]
                    set i = -1
        
        return anagramObj
                     
    Create function to test for anagrams

        create allAnagrams array to store anagram combinations
        create anagram array array to store
        
        Iterate over each given word in array            
            Create allAnagrams by passing word into helper function
            test if words[i] in anagram object
            if it is pass into empty anagram array
            if i === words.length - 1
                push anagram array into all anagrams
                shift off first element
                reset i

*/

// Sorting word means that you just have to match characters alphabetically
//  and if sorted word is contained within the object, that you have an anagram,
//  and you can then push this into the array stored in the 'm' object representing
//  all anagrams

const groupAnagrams = strs => {
    let m = {};

    for(let i = 0; i < strs.length; i++) {
        let word = strs[i];
        var wordSorted = word.split('').sort();
        m[wordSorted] ? m[wordSorted].push(word) : m[wordSorted] = [word] ;
    }

    var r = [];
    var keys = Object.keys(m);
    
    for(var k = 0; k < keys.length; k++) {
        r.push( m[keys[k]] );
    }

    return r;
};