// QUESTION //
/* 
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0
*/


//PARAMETERS:  an array -> no duplicates, integers, can be negative, can be empty

//RETURNS: returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number

//EXAMPLES: (Input --> Output)
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

//PSEUDOCODE:
// Create a function that take in an array of integers 
// take that array and sort it from lowest to highest
// declare a variable "missingNums" ans set it to 0
// iterate from first num to last num of sorted array with increasement of +1 and check if any numbers are missing from sorted array to make it an array of consecutive numbers
// if any numbers are missing than add 1 to "missingNums" for each missing numbers
// return "missingNums" value

//SOLUTION:
function consecutive(array) {
    array.sort((a, b) => a - b);
    let missingNums = 0;
    for (let i = array[0]; i < array[array.length - 1]; i++) {
        if(!array.includes(i)){
            missingNums += 1
        }
    }
    return missingNums
}

console.log(consecutive([4, 8, 6]), 2);
console.log(consecutive([1, 2, 3, 4]), 0);
console.log(consecutive([]), 0);
console.log(consecutive([1]), 0);
console.log(consecutive([-1, -5]), 3);


//NOTE: Another way to solve this problem
// const consecutive = arr => arr.length ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0;

// function consecutive(arr) {
//   var sorted = arr.sort(function (a, b) {
//     return a - b;
//   });
//   var count = 0;
//   for (var i = 0; i < sorted.length - 1; i++) {
//     var diff = sorted[i + 1] - sorted[i];
//     if (diff > 1) {
//       count += diff - 1;
//     }
//   }
//   return count;
// }