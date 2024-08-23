// QUESTION //
/* 
Description:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

/////////////////////////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> numbers

//RETURNS: return an array after sorting the odd numbers in ascending order while leaving the even numbers at their original positions

//EXAMPLES: (Input --> Output)
// [7, 1]  -->  [1, 7]
// [5, 8, 6, 3, 4]  -->  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  -->  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//PSEUDOCODE:
// Create a function that take in an array of numbers
// declare variable "sortedOdds" and set it to an array of sorted odd numbers capture from provided array "array"
// then map through the original array "array", replace each number with the first sorted odd if the number is odd, or itself if even:

//SOLUTION:
function sortArray(array) {
    const sortedOdds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => (num % 2 !== 0 ? sortedOdds.shift() : num));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);


//NOTE: Other way to solve this problem
// function sortArray(array) {
//   var odds = [];
//   //loop, if it's odd, push to odds array
//   for (let i = 0; i < array.length; ++i) {
//     if (array[i] % 2 !== 0) {
//       odds.push(array[i]);
//     }
//   }
//   //sort odds from smallest to largest
//   odds.sort(function (a, b) {
//     return a - b;
//   });

//   //loop through array, replace any odd values with sorted odd values
//   for (let j = 0; j < array.length; ++j) {
//     if (array[j] % 2 !== 0) {
//       array[j] = odds.shift();
//     }
//   }

//   return array;
// }