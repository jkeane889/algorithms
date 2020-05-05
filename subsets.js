// Subsets

/*
    Given a set of distinct integers, nums, return all possible subsets (the power set).

    Note: The solution set must not contain duplicate subsets.

    Example:

    Input: nums = [1,2,3]

    Output:
            [
                [3],
                [1],
                [2],
                [1,2,3],
                [1,3],
                [2,3],
                [1,2],
                []
            ]

*/

/*
    I - array of distinct integers
    O - all possible subsets without duplicate sets
    C - recursive time complexity with backtracking
    E - given an empty set, or a set with only 1 element

*/

/*
    DFS backtracking

    Create a global object to store all subsets (to avoid duplicates)

    Create inner recursive function to find all subsets

        base case: if input array's length === 0
                        return

        recursive case: 
            
            iterate over elements in given array
                if firstIteration, array = []    
                    push into array
                
                check if object contains current array
                    if it doesn't, add to subset object
                        splice out current element and recurse with updated array 
                
                remove last element from array

*/

const subsets = nums => {
    const powerset = [];
    generatePowerset([], 0);

    function generatePowerset(path, index) {
        powerset.push(path);
        
        for (let i = index; i < nums.length; i++) {
            generatePowerset([...path, nums[i]], i + 1);
        }
    }

    return powerset;
};
