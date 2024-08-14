// QUESTION //
/* 
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/


//PARAMETERS: an array 

//RETURNS: returns the elements of the input-array / list sorted in lexicographical order

//EXAMPLES: (Input --> Output)
// ["one", "two", "three"] --> ["one", "three", "two"]

//PSEUDOCODE: 
// declare a variable "sortme" and set it to a function that take in an array 
// take that array and sort it in lexicographical order
// return array in lexicographical order

//SOLUTION:
let sortme = function( names ){
    return names.sort()
}

console.log(sortme(["one", "two", "three"]), ["one", "three", "two"]);

// NOTE: Another way to solve this problem 
// sortme = function( names ){
//   return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
// }