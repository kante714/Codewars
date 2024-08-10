// QUESTION //
/* 
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/


//PARAMETERS: an array -> only 10 numbers, can be from 1 to 26, can have duplicate numbers 

//RETURNS: return "WIN" if your numbers can spell "BINGO" in the input array else return "LOSE"

//EXAMPLES: (Input --> Output)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> "LOSE"
// [21, 13, 2, 7, 5, 14, 7, 15, 9, 10] --> "WIN"

//PSEUDOCODE:
// Create a function that take in an array of 10 numbers 
// declare variable "bingoLetters" and set it to ["b", "i", "n", "g", "o"]
// declare variable "letters" and set it an alphabetical version of numbers in provided array
// if "letters" includes characters which is in "bingoLetters" than return 'WIN' else return 'LOSE'

//SOLUTION:
function bingo(a) {
    const bingoLetters = ["b", "i", "n", "g", "o"];
    const letters = a.map((number) => String.fromCharCode(96 + number));
    
    return bingoLetters.every((char) => letters.includes(char)) ? "WIN" : "LOSE";
}


console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");

// NOTE: short cut
// return [2, 7, 9, 14, 15].every(bingoValue => a.includes(bingoValue)) ? 'WIN' : 'LOSE'
// const bingo = a => [...`bingo`].every(val => a.includes(val.charCodeAt() - 96)) ? `WIN` : `LOSE`