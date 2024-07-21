/* QUESTION

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

// MY SOLUTION //

//PARAMETER: an array of strings => only string, no num, no boolean

//RESULT: return each line prepended by the correct number

//EXAMPLES: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//PSEUDOCODE:
// Create a function that take an array of strings and store it in number variable
var number = function (array) {
  let linePrependedByNumber = [];
  for(let i = 0; i < array.length; i++){
    linePrependedByNumber.push(`${i + 1}: ${array[i]}`);
  }
  return linePrependedByNumber;
};
// can be solve using map method

console.log(number([]), [])
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"])