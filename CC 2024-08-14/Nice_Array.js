// QUESTION //
/* 
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
*/


//PARAMETERS: an array -> integers, can be empty

//RETURNS: return true if its array argument is a Nice array, else false. (An empty array is not considered nice)

//EXAMPLES: (Input --> Output)
// [2, 10, 9, 3] --> true
// [3, 4, 5, 7] --> false

//PSEUDOCODE:
// Create a function that take in an array of integers
// loop over the given array and check if every nums in an array is either equal to another num - 1 or num + 1
// if all nums in an array meets above condititon than return true else return false (false for empty array as well)  

//SOLUTION:
function isNice(arr) {
    return Boolean(arr.length) && arr.every((num, index, array) => array.includes(num + 1) || array.includes(num - 1))
}

console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);

//NOTE: Another way to solve this problem
// function isNice(arr){
//   return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
// }