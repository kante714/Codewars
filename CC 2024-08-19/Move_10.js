// QUESTION //
/* 
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/


//PARAMETERS: a string -> length greater than 0

//RETURNS: return a string after moving every letter in the provided string forward 10 letters through the alphabet.If it goes past 'z', start again at 'a'

//EXAMPLES: (Input --> Output)
// "testcase" --> "docdmkco"
// "codewars" --> "mynogkbc"
// "exampletesthere" --> "ohkwzvodocdrobo"

//PSEUDOCODE:
// Create a function that take in a string with length greater than 0
// take provided string , loop over it and  check if decimal value of alphabet letter + 10 will be greater than 122
// if greater than 122 than return alphabet letter from decimal value of provided alphabet letter - 16 else return alphabet letter from decimal value of provided alphabet letter + 10
// join returned alphabet letter as string and return it

//SOLUTION:
function moveTen(s) {
    return s
    .split("")
    .map((alphabet) =>
        alphabet.charCodeAt() + 10 > 122
        ? String.fromCharCode(alphabet.charCodeAt() - 16)
        : String.fromCharCode(alphabet.charCodeAt() + 10)
    )
    .join("");
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");

//NOTE: Another way to solve this problem
// function moveTen(s) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let move10 = "klmnopqrstuvwxyzabcdefghij";
//   return s.replace(/[a-z]/g, (x) => move10[alphabet.indexOf(x)]);
// }

// function moveTen(s) {
//   return s.replace(/[a-z]/g, (char) =>
//     String.fromCharCode(97 + ((char.charCodeAt(0) - 97 + 10) % 26))
//   );
// }

// const moveTen = s => s.replace(/./g, char => 'klmnopqrstuvwxyzabcdefghij'[char.charCodeAt() - 97])
