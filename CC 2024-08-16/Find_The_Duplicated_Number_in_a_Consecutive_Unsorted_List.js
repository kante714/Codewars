// QUESTION //
/* 
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/


//PARAMETERS: an array of integers -> should have consecutive numbers, can have duplicate numbers

//RETURNS: return the duplicate value from an array as a single integer.

//EXAMPLES: (Input --> Output)
// [1, 2, 2, 3] --> 2
// [1, 3, 2, 5, 4, 5, 7, 6] --> 5

//PSEUDOCODE:
// Create a function that take in an array of consecutive integers 
// iterate through given array and for each num, check if the first occurrence index is different from the current index. If so, the num is a duplicate
// return duplicate num as a single integer

//SOLUTION:
function findDup(arr) {
    return Number(arr.filter((num, index) => arr.indexOf(num) !== index));
}

console.log(findDup([1, 2, 2, 3]), 2);
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);


//NOTE: Another way to solve this problem
// function findDup(arr) {
//   arr.sort();

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] == arr[i + 1]) {
//       return arr[i];
//     }
//   }
// }

// function findDup(arr){
//   return arr.reduce(function(n, v, i){
//     return arr.indexOf(v) == i ? n : v;
//   }, null);
// }

// function findDup(arr) {
//   return arr.reduce((a, b, i) => a ^ b ^ i, 0);
// }


