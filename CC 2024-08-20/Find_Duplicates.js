// QUESTION //
/* 
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/


//PARAMETERS: an array -> can be mixture of string and numbers or only string or numbers, can have duplicates numbers

//RETURNS: return a new array of duplicates which are found in provided array

//EXAMPLES: (Input --> Output)
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  -->  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                -->  []

//PSEUDOCODE:
// Create a function that take in an array 
// decalre variable "arr1" and set it to new array with numbers which occured 2 times in provided array
// decalre variable "arr2" and set it to new array which contain only unique numbers from "arr1"
// return array "arr2"

//SOLUTION:
function duplicates(arr) {
    let arr1 = arr.filter((number, index) => arr.indexOf(number) !== index)
    let arr2 = arr1.filter((number, index) => arr1.indexOf(number) === index)
    return arr2
}

console.log(duplicates([1, 2, 3, 4, 5]), []);
console.log(duplicates([]), []);
console.log(duplicates(['no', 'duplicates', 'here']), []);
console.log(duplicates([1, 2, 3, 4, 3]), [3]);
console.log(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1]);
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2]);
console.log(duplicates([1, 2, 3, 4, '3']), []);
console.log(duplicates(['1', 2, 3, 3, '2', 1]), [3]);
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut']);

//NOTE: Another way to solve this problem
// function duplicates(arr) {
//   return arr.reduce(function (prev, cur, i, a) {
//     if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
//       prev.push(cur);
//     }
//     return prev;
//   }, []);
// }

// const duplicates = (arr) => {
//   let map = new Map();
//   let set = new Set();
//   arr.forEach((e) => {
//     map.get(e) ? set.add(e) : map.set(e, true);
//   });
//   return Array.from(set);
// };

// const duplicates = array => [...new Set(array.filter((number, index) => array.indexOf(number) !== index))]
