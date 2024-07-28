// QUESTION //
/* 

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

*/

// MY SOLUTION //

//PARAMETER: 2 arrays (starting array and mixed arrays) -> only nums 

//RESULT: return the number that was deleted or return 0 if no number was deleted

//EXAMPLES: (Input --> Output)
// [1,2,3,4,5], [3,4,1,5] -->  2
// [1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8] -->  5
// [1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3] -->  0

//PSEUDOCODE: function that take in 2 arrays starting array and mixed array, loop through starting array using filter method, check which num is not in mixed array (deleted num) else if there is no deleted num return only 0

function findDeletedNumber(arr, mixArr) {
    return arr.filter(num => mixArr.indexOf(num) === -1)[0] || 0
}
//NOTE: this problem also can be solve using reduce method
// function findDeletedNumber(arr, mixArr) {
//   let arrSum = arr.reduce((a, b) => a + b, 0);
//   let mixArrSum = mixArr.reduce((a, b) => a + b, 0);
//   return arrSum - mixArrSum;
// }

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), "2")
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), "5")
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), "0")