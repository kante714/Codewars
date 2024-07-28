// QUESTION //
/*

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 

*/

// MY SOLUTION //

//PARAMETER: an array of integers and position nth -> no empty (size >= 3) array, nums can be positive, negative and zeros, can have duplicate nums in array

//RESULT: return nth smallest element in the array

//EXAMPLES: (Input --> Output)
// [3, 1, 2], 2 --> 2
// [15, 20, 7, 10, 4, 3], 3 --> 7
// [-5, -1, -6, -18], 4) --> -1
// [-102, -16, -1, -2, -367, -9], 5) --> -2
// [2, 169, 13, -5, 0, -1], 4 --> 2
// [2, 1, 3, 3, 1, 2], 3 --> 2

//PSEUDOCODE: function that take in 2 arguments an array and a nth position, sort the array in ascending order,return the element at the N-1 index in the sorted array (0 – Based indexing).

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}

console.log(nthSmallest([3, 1, 2], 2), "2");
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), "7");
console.log(nthSmallest([-5, -1, -6, -18], 4), "-1");
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), "-2");
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), "2");
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3), "2");
