// QUESTION //
/* 
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/


//PARAMETERS: an array of integers -> can be empty

//RETURNS: return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

//EXAMPLES: (Input --> Output)
// [2, 3, 4, 5] --> 30

//PSEUDOCODE:
// Create a function that take in an array of integers
// loop over given array and check if index of an element is even 
// if index of an element is even sum that element and multiple the total sum by last integer
// if array is empty return 0

//SOLUTION:
function evenLast(numbers) {
    return numbers.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum, 0) * numbers[numbers.length - 1] || 0
}

console.log(evenLast([2, 3, 4, 5]), 30);


//NOTE: Another way to solve this problem
// function evenLast(numbers) {
//   if (numbers.length === 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i += 2) {
//     sum += numbers[i];
//   }
//   return sum * numbers[numbers.length - 1];
// }