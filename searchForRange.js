// Search for a Range

/*
    Given an array of integers nums sorted in ascending order, 
    find the starting and ending position of a given target value.

    Your algorithm's runtime complexity must be in the order of O(log n).

    If the target is not found in the array, return [-1, -1].

    Example 1:

        Input: nums = [5,7,7,8,8,10], target = 8
        Output: [3,4]
    
    Example 2:

        Input: nums = [5,7,7,8,8,10], target = 6
        Output: [-1,-1]

*/

/*
    I - array of varied integers with a given target value
    O - start and end index of value stored in array
    C - time complexity must be O log n
    E - array does not contain target value (return [-1, -1]); array is empty

*/

/*
    Binary search algorithm of array using pointers

        let minMax = []

        base case: if midPoint > max || midPoint < min
                        return
        
        recursive case:

            initially set maxPointer to last element in array
            initially set minPointer to first element in array
            get maxValue = last element in array
            get minValue = first element in array
            
            if target value === minValue && target value === max Value
                minMax.push(minValue, maxValue + 1)
                return
            if (target value > minValue && target value < max Value)
                recurse and add one to minValue and subtract one from max value
            else if (target value === minValue && target value < maxValue)
                recurse and subtract one from maxValue
            else if (targetValue === max value && target value > minvalue)
                recursve and add one from minValue

*/

const searchRange = (nums, target) => {
    if (!nums.length) {
        return [-1, -1]
    }

    let minMax = []

    const findMinMax = (arr, targVal, min, max) => {
        if (min && max) {
            if (min > arr.length - 1 || max < 0) {
                minMax.push(-1, -1)
                return
            }
        }

        if (min === null && max === null) {
            min = 0
            max = arr.length - 1
        }

        let minVal = arr[min]
        let maxVal = arr[max]

        if (targVal === minVal && targVal === maxVal) {
            minMax.push(min, max)
            return
        } else if (targVal > minVal && targVal < maxVal) {
            return findMinMax(arr, targVal, min += 1, max -= 1)
        } else if (targVal === minVal && targVal !== maxVal) {
            return findMinMax(arr, targVal, min, max -= 1)
        }  else if (targVal === maxVal && targVal !== minVal) {
            return findMinMax(arr, targVal, min += 1, max)
        }
    }

    findMinMax(nums, target, null, null)
    
    if (!minMax.length) {
        return [-1, -1]
    } else {
        return minMax
    }
};