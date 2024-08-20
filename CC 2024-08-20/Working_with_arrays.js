// QUESTION //
/* 
In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

Some good reading: MDN Docs about arrays
*/


//PARAMETERS: an array of numbers 

//RETURNS: returns an array/list of numbers without its last element

//EXAMPLES: (Input --> Output)
// [1, 2, 3, 4, 5] --> [1, 2, 3, 4]
// [6, 7, 8, 9] --> [6, 7, 8]

//PSEUDOCODE:
// Create a function that take in an array of numbers
// return provided array after slicing last elements from it

//SOLUTION:
function withoutLast(arr) {
    return arr.slice(0, -1);// removes the last element
}

console.log(withoutLast([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
console.log(withoutLast([6, 7, 8, 9]), [6, 7, 8]);

//NOTE: Another way to solve this problem
// function withoutLast(arr) {
//   arr = [...arr];
//   arr.pop();
//   return arr;
// }

// function withoutLast(arr) {
//   var arr2 = arr.slice(); // this way I use a shallow copy of an array
//   arr2.pop();
//   return arr2;
// }