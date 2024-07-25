// QUESTION //
/* 

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

// MY SOLUTION //

//PARAMETER: an array => only nums, can be negative nums

//RESULT return "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

//EXAMPLES: (input --> Output)
// [1, 2] --> 'yes, ascending'
// [15, 7, 3, -8] --> 'yes, descending'
// [4, 2, 30] --> 'no'

//PSEUDOCODE: create a function that take in an array of integers, check if the array is in ascending , descending or in random order using every method with ternary operator

function isSortedAndHow(array) {
    return array.every((num, index) => index == 0 || array[index] >= array[index - 1]) ? 'yes, ascending' : array.every((num, index) => index == 0 || array[index] <= array[index - 1]) ? 'yes, descending' : 'no'
}

//NOTE: this problem can also be solve using filter method 
// const isSortedAndHow = (array) => {
//     let ascending = array.filter((item, index, arr) => item > arr[index + 1]).length == 0;
//     let descending = array.filter((item, index, arr) => item < arr[index + 1]).length == 0;

//     return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
// };

console.log(isSortedAndHow([1, 2]), "yes, ascending");
console.log(isSortedAndHow([15, 7, 3, -8]), "yes, descending");
console.log(isSortedAndHow([4, 2, 30]), "no");