// Kth Largest Element in Array

/*
    Find the kth largest element in an unsorted array.
    
    Note that it is the kth largest element in the sorted order, 
    not the kth distinct element.

    Example 1:

    Input: [3,2,1,5,6,4] and k = 2
    Output: 5

    Example 2:

    Input: [3,2,3,1,2,4,5,5,6] and k = 4
    Output: 4

    Note:
    You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/*
    I - unsorted array and k being the target integer 
    O - kth largest integer in array
    C - linear time complexity?
    E - given an empty array, k > array.length
*/

/*
    Sort the array in ascending order and return spliced element at index "k"
    
    1. use native ".sort" -> this relies on understanding how to implement merge-sort
    2. create a max heap and keep searching through until search count === k


*/

const merge = (leftArray, rightArray, array) => {
    let index = 0

    // while there are numbers to be sorted in both left and right arrays
    while (leftArray.length && rightArray.length) {
        // if element at first index in right array is less than
        //      element at first index in left array

        //  replace element in original array with element in right array at
        //  first index
        if (rightArray[0] < leftArray[0]) {
            array[index++] = rightArray.shift()
        } else {
            array[index++] = leftArray.shift()
        }
    }

    // then push any greater elements to end of the array
    while (leftArray.length) {
        array[index++] = leftArray.shift()
    }
    
    // then push any greater elements to end of the array
    while (rightArray.length) {
        array[index++] = rightArray.shift()
    }
}

const mergeSort = arr => {
    // Determine size of input array
    let arraySize = arr.length;

    // base case: if array being passed in has only one element within it,
    //  it is considered to be a sorted array
    if (arraySize === 1) {
        return
    }

    // if array contains more than one element, split it into two parts
    //  "left" and "right"
    let midPoint = Math.floor(arraySize / 2);
    let leftArray = arr.slice(0, midPoint);
    let rightArray = arr.slice(midPoint);

    // recursive case: call mergeSort on left and right halves of array
    mergeSort(leftArray)
    mergeSort(rightArray)

    // after merge sort functions above are finished executing,
    //  merge the sorted left and right arrays together
    merge(leftArray, rightArray, arr)

    // return the fully sorted array
    return arr
}

const findKthLargest = (nums, k) => {
    if (!nums.length) {
        return null
    }
    
    if (nums.length === 1) {
        return nums[0]
    }

    let sortedNums = mergeSort(nums)
    let kth = sortedNums.splice(sortedNums.length - k, 1)
    return kth[0]    
};