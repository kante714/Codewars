// QUESTION //
/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/


//PARAMETERS: number (n) and an array ->  number will be >= 0, an array can be mixutre of negative, positive or zeros

//RETURNS: the top n elements from a list 

//EXAMPLES: (Input --> Output)
// 2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> [9, 10]
// 0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> []
// 2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5] --> [-1, 0]
// 3, [5, 1, 5, 2, 3, 1, 2, 3, 5] --> [5, 5, 5]
// 7, [9, 1, 50, 22, 3, 13, 2, 63, 5] --> [3, 5, 9, 13, 22, 50, 63]
// 0, [1, 2, 3, 4, 8, 7, 6, 5] -->  []


//PSEUDOCODE: 
//create a function that take in a number and an array 
//take an array and sort it 
//capture the largest n elements from sorted array
//return those largest n elements as an array 

//SOLUTION:
function largest(n, array) {
    return array.sort((a, b) => a - b).splice(-n, n)
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10]);
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), []);
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]), [-1, 0]);
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5]);
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]), [3, 5, 9, 13, 22, 50, 63]);
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]), []);

//NOTE: Another way to solve this problem
// function largest(n,array){
//     return array.sort(function(a, b) {return a - b;}).slice(array.length-n);
// }

// const largest = function (n, array) {
//   return n === 0 ? [] : array.sort((a, b) => a - b).slice(-n);
// };