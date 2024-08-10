// QUESTION //
/* 
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/


//PARAMETERS: an integer array 

//RETURNS: returns its Stanton measure (the number of times that n appears in the array)

//EXAMPLES: (Input --> Output)
// [1, 4, 3, 2, 1, 2, 3, 2] --> 3
// [1, 4, 1, 2, 11, 2, 3, 1] --> 1

//PSEUDOCODE:
// Create a function that take in an array of integers
// declare variable "stantonNumber" and set it to count of how many times 1 occured in provided array
// declare variable "stantonNumber2" and set it to count of how many times "stantonNumber" occured in provided array
// return value of "stantonNumber2"

//SOLUTION:
function stantonMeasure(a) {
    const stantonNumber = a.reduce((count, number) => (number === 1 ? count + 1 : count), 0)
    const stantonNumber2 = a.reduce((count, number) => (number === stantonNumber ? count + 1 : count), 0)
    return stantonNumber2
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]), 3);
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]), 1);


//NOTE: Another way to solve this problem
// function stantonMeasure(arr) {
//   const count = (n) => arr.filter((x) => x === n).length;
//   return count(count(1));
// }