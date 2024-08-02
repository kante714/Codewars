// QUESTION //
/* 
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/


// MY SOLUTION //

//PARAMETER: a string -> can be string of numbers, can be string of words, no empty

//RESULT: returns the given string with spaces inserted between each character

//EXAMPLES: (input --> Output)
// "hello world" --> "h e l l o   w o r l d"
// "12345" --> "1 2 3 4 5"

//PSEUDOCODE: create a function that take in a string, take the given string than split it into the array of character, than join it with spaces inserted between each character, return the result

function spacify(str) {
    return str
    .split('')
    .join(' ')
}

console.log(spacify("hello world"), "h e l l o   w o r l d");
console.log(spacify("12345"), "1 2 3 4 5");


//NOTE: can be solve like below as well
// function spacify(str) {
//   return [...str].join(" ");
// }