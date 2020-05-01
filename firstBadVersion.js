// First Bad Version

/*
    You are a product manager and currently leading a team to develop a new product. 
    Unfortunately, the latest version of your product fails the quality check. 
    Since each version is developed based on the previous version, all the versions after a bad version are also bad.

    Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
    which causes all the following ones to be bad.

    You are given an API bool isBadVersion(version) which will return whether version is bad. 
    Implement a function to find the first bad version. You should minimize the number of calls to the API.

    Example:

    Given n = 5, and version = 4 is the first bad version.

    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true

    Then 4 is the first bad version. 

*/

/*
    I - n representing the version number
    O - the first version number that was bad
    C - reduce the amount of API calls that have to be called
    E - no bad versions (all versions are good); n === 0

*/

/*
    Binary Search

    Create an empty array to store potential first versions
    Create a variable called past "N"
    Create a variable called current "N"
    
    while n === true

        if there is no current n, store current n as past n
        if there is no past n, halve n and store as current n

        call api using half n
        
        if api returns true
            make past n === current n

        if api returns false
            start from current n and push all values from past till current into array

            for each value in array
                call API
                if this current element > current N
                set current N to this element

    return current N
*/

const solution = (isBadVersion, n) => {

    return function(n) {                
        let currenN = n
        let pastN = n
        let checkN = true
        let potentials = []
        let first;

        while (checkN) {
            if (isBadVersion(currenN)) {
                pastN = currenN
                currenN = Math.floor(n / 2)
            } else {
                let i = currenN

                while (i <= pastN) {
                    let result = isBadVersion(i)
                    if (result === false) {
                        i += 1
                    } else {
                        first = i
                        break
                    }
                }

                checkN = false
            }
        }

        return first
    }(n);
};