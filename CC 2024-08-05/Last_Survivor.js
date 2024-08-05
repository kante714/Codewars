// QUESTION //
/* 
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/


//PARAMETERS: a string and an array -> string will never be empty, array length is always one less than string length, can have duplicate letters and numbers

//RETURNS: return only last letter left after removing letters

//EXAMPLES: (Input --> Output)
// ("abc", [1, 1]) --> "a"
// ("kbc", [0, 1]) --> "b"
// ("zbk", [2, 1]) --> "z"

//PSEUDOCODE:
// create a function that take in 2 arguments a string and an array 
// declare variable 'arrayOfLetters' and set it to letters converted to array 
// loop over and remove one element from given position from 'arrayOfLetters'
// convert 'arrayOfLetters' into string 
// return only the last letter left after removing letters

//SOLUTION:
function lastSurvivor(letters, coords) {
    let arrayOfLetters = letters.split("");
    for (let i = 0; i < coords.length; i++) {
        arrayOfLetters.splice(coords[i], 1);
    }
    return arrayOfLetters.join("");
}    
    
console.log(lastSurvivor("zbk", [2, 1]), "z");
console.log(lastSurvivor("kbc", [0, 1]), "b");
console.log(lastSurvivor("abc", [1, 1]), "a");

//NOTE: another way to solve this problem
// function lastSurvivor(letters, coords) {
//     return coords.reduce((letters, coord) => letters.slice(0, coord) + letters.slice(coord + 1), letters)
// }