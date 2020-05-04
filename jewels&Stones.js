// Jewels and Stones

/*
    You're given strings J representing the types of stones that are jewels, 
    and S representing the stones you have.  

    Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

    The letters in J are guaranteed distinct, and all characters in J and S are letters. 
    Letters are case sensitive, so "a" is considered a different type of stone from "A".

    Example 1:

    Input: J = "aA", S = "aAAbbbb"
    Output: 3
    Example 2:

    Input: J = "z", S = "ZZ"
    Output: 0
    Note:

    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.

*/

/*
    I - strings "S" and "J", with "S" representing jewel stones and S representing all stones you have
    O - number of "J" jewels within the total "S" stones you have
    C - linear time complexity iterating over "S" total stones
    E - given 0 stones in string "S"; no "J" jewels located within "S" stones

*/

/*
    Create a global counter variable to hold total number of Jewels
    
    For input "J", create an object with keys/values, with keys equal to different J jewels

    For S stones, create a queue to look at each stone
        if object jewels contained S stone
            global counter ++
        else
            go to next element in queue

    return global counter variable for jewels
*/

const numJewelsInStones = (J, S) => {
    let jewelCount = 0
    let jewels = {}
    let stones = S.split('')

    J.split('').forEach(char => {
        if (!jewels[char]) {
            jewels[char] = true
        }
    });

    for (let i = 0; i < stones.length; i++) {
        if (jewels[stones[i]]) {
            jewelCount += 1
        }
    }

    return jewelCount
};