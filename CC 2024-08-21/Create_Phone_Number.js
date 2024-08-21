// QUESTION //
/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/


//PARAMETERS: an array -> 10 integers between 0 and 9

//RETURNS: returns a string of those numbers in the form of a phone number

//EXAMPLES: (Input --> Output)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] --> "(123) 456-7890"
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] --> "(111) 111-1111"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] --> "(123) 456-7890"

//PSEUDOCODE:
// Create a function that take in an array of 10 integers between 0 and 9
// declare variable "stringNumbers" and set it to a string which is converted from provided array "numbers"
// return string in form of a phone number using template literal

//SOLUTION:
function createPhoneNumber(numbers) {
    let stringNumbers = numbers.join('')
    return `(${stringNumbers.slice(0,3)}) ${stringNumbers.slice(3, 6)}-${stringNumbers.slice(6, 10)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

//NOTE: Other way to solve this problem
// function createPhoneNumber(numbers) {
//   let format = "(xxx) xxx-xxxx";

//   for (let i = 0; i < numbers.length; i++) {
//     format = format.replace("x", numbers[i]);
//   }

//   return format;
// }

// function createPhoneNumber(numbers) {
//   numbers = numbers.join("");
//   return (
//     "(" +
//     numbers.substring(0, 3) +
//     ") " +
//     numbers.substring(3, 6) +
//     "-" +
//     numbers.substring(6)
//   );
// }

// function createPhoneNumber(numbers) {
//   return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
// }

// function createPhoneNumber(numbers) {
//   return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
// }