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
        
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        } else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }  
};

const coinChange = memoize((coins, amount) => {
    let minArray = []

    if (amount === 0) {
        return 0
    }

    console.log(coins)
    console.log(amount)

    const findSmallestCoinsCombo = (coinArr, coinsUsed, currentSum, total) => {
        if (!coinArr.length) {
            return
        }

        if (currentSum === total) {
            if (!minArray.length || coinsUsed.length < minArray.length) {
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

    if (minArray.length < 1) {
        return -1
    } else {
        return minArray.length
    }
});

console.log(coinChange([1, 2, 5], 11))

// const factorial = memoize(
//     (x) => {
//         if (x === 0) {
//             return 1;
//         } else {
//             return x * factorial(x - 1);
//         }
//     }
// );

// console.log(factorial(5)); // calculated
// console.log(factorial(6)); // calculated for 6 and cached for 5
