// QUESTION //

/* 

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

*/

// MY SOLUTION //

//PARAMETER: an array, 2 dimensional, int

//RESULT: return the flattened version of the array sorted from lowest to highest

//EXAMPLES: 
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Given [[], []], your function should return [].
// Given [[1, 3, 5], [100], [2, 4, 6]], your function should return [1, 2, 3, 4, 5, 6, 100].

//PSEUDOCODE: function that take in an 2 dimensional array, flatten array with reduce method, sort the flattened array

function flattenAndSort(array) {
    let flattenedArray = array.reduce((flattened, twoDem) => twoDem.concat(flattened), [])
    return flattenedArray.sort((a,b) => a - b)
}

//NOTE: can be solve with concat method + sort as well ([].concat(...array).sort((a,b) => a - b);)

console.log(flattenAndSort([]), "[]");
console.log(flattenAndSort([[], []]), "[]");
console.log(flattenAndSort([[], [1]]), "[1]");
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), "[1, 2, 3, 4, 5, 6, 7, 8, 9]");
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), "[1, 2, 3, 4, 5, 6, 100]");
