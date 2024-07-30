// QUESTION //
/* 
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/


//PARAMETERS: an array -> 1d, 2d, 3d,nums,strings, can be empty

//RETURNS: return a flat Array

//EXAMPLES: (Input --> Output)
// [] --> []
// [1, 2, 3] --> [1, 2, 3]
// [[1, 2, 3], ["a", "b", "c"], [1, 2, 3]] --> [1, 2, 3, "a", "b", "c", 1, 2, 3]
// [[3, 4, 5], [[9, 9, 9]], ["a,b,c"]] --> [3, 4, 5, [9, 9, 9], "a,b,c"]
// [[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]] --> [[3], [4], [5], 9, 9, 8, [1, 2, 3]]

//PSEUDOCODE:
// Create a function that take in an different dimensional array
// loop over given array that concat array element to get flatten array
// return flatten array

//SOLUTION:
let flatten = function (array) {
    return array.reduce((a, b) => a.concat(b), [])
};

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);

//NOTE: Another way to solve this problem
// let flatten = function (array) {
//   return array.flat();
// };

// const flatten = (array) => [].concat(...array);

// let flatten = function (array) {
//   return [].concat.apply([], array);
// };