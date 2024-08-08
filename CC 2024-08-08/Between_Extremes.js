// QUESTION //
/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/


//PARAMETERS: an array of numbers -> at least 2 elements,no string
 
//RETURNS: return the difference between the largest and smallest values.

//EXAMPLES: (Input --> Output)
// ([21, 34, 54, 43, 26, 12]) --> 42
// ([-1, -41, -77, -100]) --> 99

//PSEUDOCODE:
// create a function that take in an array of numbers with at least 2 elements
// declare variable 'sortedNumbers'
// take provided array and sort it from highest to lowest numbers than store it in variable 'sortedNumbers'
// return the difference between the first element (highest number) and last element (lowest number) from 'sortedNumbers'

//SOLUTION:
function betweenExtremes(numbers) {
    let sortedNumbers = numbers.sort((a, b) => b - a)
    return sortedNumbers[0] - sortedNumbers[sortedNumbers.length - 1]
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42)
console.log(betweenExtremes([-1, -41, -77, -100]), 99)

//NOTE: short cut
// function betweenExtremes(numbers) {
//   return Math.max(...numbers) - Math.min(...numbers);
// }