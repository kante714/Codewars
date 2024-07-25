// QUESTION //
/* 

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

// MY SOLUTION //

//PARAMETER: an array => nums, no empty, at least 1 even number / a length num => integer, positive

//RESULT: return a new array of length number containing the last even numbers from the original array

//EXAMPLES: (Input => Output)
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//PSEUDOCODE: function that take in an array and a length number, get all even nums from an array using filter method, capture last even nums for given length using slice method

function evenNumbers(array, number) {
    return array.filter(num => num % 2 === 0).slice(-number)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), "[4, 6, 8]");
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), "[-8, 26]");
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), "[6]");