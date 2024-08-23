// QUESTION //
/* 
Description:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

//////////////////////////////////////////////////////////////////////

//PARAMETERS: a string of words 

//RETURNS: find and return the highest scoring word

//EXAMPLES: (Input --> Output)
// "what time are we climbing up the volcano" --> "volcano"
// "take me to semynak" --> "semynak"
// "aa b" --> "aa"

//PSEUDOCODE:
// Create a function that take in a string of words
// declare variable "alphabet" and set it to an array of all alphabet letters
// declare variable "alphabetObject" and set it to an object with alphabet letter as key and 1....26 as value
// declare variable "wordArray" and set it as an array of words converted from provided string of words
// declare variable "wordScore" and set it to an array of totalScore capture from each words from "wordArray" according to the alphabet letter value(points) in "alphabetObject"
// return word which has the highest score among the words in provided array "x"

//SOLUTION:
function high(x) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphabetObject = alphabet.reduce((obj, char, index) => Object.assign(obj, {[char]: index + 1}), {});
    let wordArray = x.split(' ')
    let wordScore = wordArray.map((word) => [...word].reduce((total, char) => total + alphabetObject[char], 0));
    return x.split(' ')[wordScore.indexOf(Math.max(...wordScore))];
}

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
console.log(high("aa b"), "aa");
console.log(high("b aa"), "b");
console.log(high("bb d"), "bb");
console.log(high("d bb"), "d");
console.log(high("aaa b"), "aaa");


//NOTE: Other way to solve this problem
// function high(s) {
//   let as = s
//     .split(" ")
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(" ")[as.indexOf(Math.max(...as))];
// }