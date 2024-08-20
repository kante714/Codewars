// QUESTION //
/* 
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/


//PARAMETERS: a string -> sentence

//RETURNS: return the index of vowel which is missing from a given string

//EXAMPLES: (Input --> Output)
// "John Doe hs seven red pples under his bsket"          -- >  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  -- >  3  ; missing: "o"

//PSEUDOCODE:
// Create a function that take in a string of sentence
// declare variable "vowels" and set it to string containing vowels letters 'aeiou'
// loop and check if provided string "x" is missing any vowel letter
// return the index of that missing vowel letter

//SOLUTION:
function absentVowel(x) {
    let vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
        if(x.toLowerCase().indexOf(vowels[i]) === -1){
            return i
        }
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);

//NOTE: Another way to solve this problem
// const absentVowel = (string) => [..."aeiou"].findIndex((letter) => !string.includes(letter));

// function absentVowel(x) {
//   return ["a", "e", "i", "o", "u"].findIndex((v) => !x.includes(v));
// }

// function absentVowel(x){
//   return !x.includes('a') ? 0 : 
//     !x.includes('e') ? 1 :
//     !x.includes('i') ? 2 :
//     !x.includes('o') ? 3 :
//     !x.includes('u') ? 4 : null
// }