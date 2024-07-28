// QUESTION //
/* 

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

// MY SOLUTION //

//PARAMETER: an array of integers -> can have string

//RESULT: return the sum of the odd numbers within an array after cubing the initial integers or return undefined if any values aren't numbers

//EXAMPLES: 

//PSEUDOCODE: function that take in an array, to check if an array contain any string use filter method with length property, if all element in array is numbers than check for odd numbers, cube the odd numbers than return the sum of the cubed odd numbers using reduce method else if an array contain any string return undefined 

function cubeOdd(arr){
    if (arr.filter((num) => typeof num === "number").length === arr.length){
        return arr.reduce((sum, num) => (num % 2 !== 0 ? sum + num ** 3 : sum ),0);
    }else{
        return undefined
    }
}
//NOTE: can be solve as below as well
// function cubeOdd(arr) {
//   let isNumeric = arr.every((x) => !isNaN(x));
//   return isNumeric ? arr.filter((num) => num % 2).reduce((sum, num) => sum + num ** 3, 0) : undefined;
// }

console.log(cubeOdd([1, 2, 3, 4]), "28");
console.log(cubeOdd([-3, -2, 2, 3]), "0");
console.log(cubeOdd(["a", 12, 9, "z", 42]), "undefined");