// QUESTION //
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/


//PARAMETERS: a string -> can have duplicate characters, can be capital

//RETURNS: reutrn a string after converting a provided string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. (Ignore capitalization when determining if a character is a duplicate)

//EXAMPLES: (Input --> Output)
// "din" --> "((("
// "recede" --> "()()()"
// "Success" --> ")())())", "should ignore case"
// "(( @" --> "))(("

//PSEUDOCODE:
// Create a function that take in a string
// declare variable "wordArray" and set it to a string of word converted to an array 
// declare variable "duplicateChecker" and set it to boolean value found after looping through "wordArray" and checking if the "wordArray" character is duplicate which means true or not which mean false 
// return "XXX" if "duplicateChecker" include '.' else return a string converted from array after replacing ")" for true and "(" for false in "duplicateChecker"

//SOLUTION:
function duplicateEncode(word) {
    let wordArray = word.toLowerCase().split('')
    let duplicateChecker = wordArray.map(( item, index) => wordArray.some((elem, idx) => elem === item && idx !== index));
    return duplicateChecker.includes('.') ? 'XXX' : duplicateChecker.map(check => check === true ? check = ')' : check = '(').join('')
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");


//NOTE: Other way to solve this problem
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

// function duplicateEncode(word) {
//   let unique = "";
//   word = word.toLowerCase();
//   for (let i = 0; i < word.length; i++) {
//     if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
//       unique += "(";
//     } else {
//       unique += ")";
//     }
//   }
//   return unique;
// }

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, (m) =>
//     word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
//   );
// }