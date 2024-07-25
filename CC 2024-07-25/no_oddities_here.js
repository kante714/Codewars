// QUESTION //
/* 

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/

// MY SOLUTION //

//PARAMETER: an array => all integers, 

//RESULT: returns the values of an array that are not odd.

//EXAMPLES: (Input => Output)
// [0, 1] => [0]
// [0, 1, 2, 3] => [0, 2]

//PSEUDOCODE: function that take an array of integers, capture all values in am array without odd values than return it

function noOdds(values) {
    // Return all non-odd values
    return values.filter(value => value % 2 === 0)
}

console.log(noOdds([0, 1]), "[0]");
console.log(noOdds([0, 1, 2, 3]), "[0, 2]");
