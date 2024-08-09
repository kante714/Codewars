// QUESTION //
/* 
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/


//PARAMETERS: an array -> integers, only from 0 to 9 

//RETURNS: returns the missing element from an array

//EXAMPLES: (Input --> Output)
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

//PSEUDOCODE:
// Create a function that take in an array of integers
// declare variable 'naturalNumbers' and set it to an array of integers from 0 to 9 
// take 'naturalNumbers' and loop over it to find if provided array 'superImportantArray' includes all number like 'naturalNumbers' (0 to 9) 
// if an array 'superImportantArray' does not include any number than return that number

//SOLUTION:
function getMissingElement(superImportantArray) {
    const naturalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return naturalNumbers.find(number => !superImportantArray.includes(number))
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);


//NOTE: Another way to solve this problem
// function getMissingElement(superImportantArray) {
//   for (i = 0; i < 10; i++) {
//     if (superImportantArray.indexOf(i) === -1) return i;
//   }
// }

// function getMissingElement(a) {
//   for (let i = 0; i < 10; i++) if (!a.includes(i)) return i;
// }

// function getMissingElement(superImportantArray) {
//   return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
// }