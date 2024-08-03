// QUESTION //
/* 

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

*/


//PARAMETERS: 1st parameter -> an array with at least 1 number, no duplicates / 2nd parameter -> string , either 'value' or 'index'

//RESULT: return the smallest value of an array or the index of that value (depending upon 2nd parameter)

//EXAMPLES: (Input --> Output)
// [1,2,3,4,5], 'value' --> 1
// [1,2,3,4,5], 'index' --> 0

//PSEUDOCODE:
// create a function that take in 2 parameters an array and a string with either 'value' or 'index'
// return smallest value in an array if 2nd argument == 'value' else return only the index of smallest value in an array

function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

console.log(min([1, 2, 3, 4, 5], "value"), 1);
console.log(min([1, 2, 3, 4, 5], "index"), 0);

//NOTE: Another way to solve this problem
// function min(arr, toReturn) {
//     if (toReturn === "value") return Math.min(...arr);
//     else return arr.indexOf(Math.min(...arr));
// }
