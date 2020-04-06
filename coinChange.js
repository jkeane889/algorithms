// Coin Change

/*
    You are given coins of different denominations and a total amount of money amount. 
    Write a function to compute the fewest number of coins that you need to make up that amount. 
    
    If that amount of money cannot be made up by any combination of the coins, return -1.

    Example 1:

    Input: coins = [1, 2, 5], amount = 11
    Output: 3 
    
    Explanation: 11 = 5 + 5 + 1
    Example 2:

    Input: coins = [2], amount = 3
    Output: -1
    
    Note:
    You may assume that you have an infinite number of each kind of coin.

*/

/*
    I - denominations of coins, and total amount to add coins up to
    O - length of array of fewest coins to equal total amount
    C - linear/logarithmic with DFS back-tracking
    E - no combination of coins equals total

*/

/*
    Create global minArray = null

    Create inner recursive function to compute combinations to coins
        base case: if currentSum === total
            if current sum's array length < minArray || !minArray
                make minArray = currentSum array
                return
            else 
                return 

            if currentSum > total
                return

        recursive case:

            let currentCoin = firstCoin in input array
            if coinArray undefined
                create coinArray and push currentCoin into it

            iterate over coins in given coinArray
                reduce coins in coin array to sum
                if sum < desired total
                    push element in coin array
                    recurse
                remove coin from coinArray

*/

const coinChange = (coins, amount) => {
    let minArray = null

    const findSmallestCoinsCombo = (coinArr, coinsUsed, currentSum, total) => {
        if (!coinArr.length) {
            return
        }

        if (currentSum === total) {
            if (!minArray || coinsUsed.length < minArray.length) {
                minArray = coinsUsed.slice()
                return
            } else {
                return
            }
        }

        if (currentSum > total) {
            return
        }

        for (let i = 0; i < coinArr.length; i++) {            
            if (!coinsUsed) {
                coinsUsed = []
            }

            coinsUsed.push(coinArr[i])
            let sum = coinsUsed.reduce((acc, elem) => { return acc + elem } )
            if (sum <= total) {
                findSmallestCoinsCombo(coinArr, coinsUsed, sum, total)
            }
            coinsUsed.pop()
        }
    }

    findSmallestCoinsCombo(coins, null, 0, amount)
    return minArray.length
};