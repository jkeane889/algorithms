// Top K Frequent Elements

/*
    Given a non-empty array of integers, return the k most frequent elements.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

    Example 2:

    Input: nums = [1], k = 1
    Output: [1]

    Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/*
    I - array of nums and k, with k corresponding to ranking of nums that appear "k" most
    O - "k" most repeated element in nums
    C - O(n log n)
    E - empty nums array, multiple elements that are equivalent in "k" frequency
*/

/*
    Create an object to store elements and count from array
    create maxElements array

    iterate over array elements
        if element does not exist in object
            element = 1
        else 
            element ++
    
    while maxElements array < k
        let max = null    

        iterate over values in object
            if max === null
                max = value[i]
            else if current element > max
                max = currentElement
        
        push max into maxElements array

    return maxElements array
*/

const topKFrequent = (nums, k) => {
    let topElements = {}
    let maxElements = []

    for (let i = 0; i < nums.length; i++) {
        if (!topElements[nums[i]]) {
            topElements[nums[i]] = 1
        } else {
            topElements[nums[i]] += 1
        }
    }

    while (maxElements.length < k) {
        let max;

        for (let key in topElements) {
            if (max === undefined) {
                max = parseInt(key)
            } else if (topElements[key] > topElements[max]) {
                max = parseInt(key)
            }
        }

        delete topElements[max]
        maxElements.push(max)
    }

    return maxElements
};