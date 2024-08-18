// QUESTION //
/* 
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/


//PARAMETERS: an array -> can be 2d array, mixture of array, string, object, numbers 

//RETURNS: return true if value in given array is an array else return false

//EXAMPLES: (Input --> Output)
// [[1],[2]] --> true
// ['1','2'] --> false
// [{1:1},{2:2}] --> false

//PSEUDOCODE:
// declare variable "arrCheck" and set it to function that take in an array 
// loop over provided array and check if every elements inside an provided array is also an array
// return true if every elements inside provided array is alse an array else return false

//SOLUTION:
const arrCheck = (value) => value.every(element => Array.isArray(element)) 

// short cut: const arrCheck = value => value.every( Array.isArray )

console.log(arrCheck([]), true);
console.log(arrCheck([["string"]]), true);
console.log(arrCheck([[], {}]), false);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(["A", "R", "R", "A", "Y"]), false);

