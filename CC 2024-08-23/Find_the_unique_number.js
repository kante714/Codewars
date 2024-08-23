// QUESTION //
/* 

Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

///////////////////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> numbers, at least 3 numbers

//RETURNS: find and return that one number which is unique number from the provided array

//EXAMPLES: (Input --> Output)
// [1, 0, 0] --> 1
// [0, 1, 0] --> 1
// [0, 0, 1] --> 1
// [1, 1, 1, 2, 1, 1] --> 2
// [1, 1, 2, 1, 1] --> 2
// [3, 10, 3, 3, 3]) --> 10


//PSEUDOCODE:
// Create a function that take in an array of at least 3 numbers
// loop over provided array "arr" and find the number which first index and last index is same (which means it is a unique number)
// return that number as Number

//SOLUTION:
function findUniq(arr) {
    return Number(
      arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
    );
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);


//NOTE: Other way to solve this problem
// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }