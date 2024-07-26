// QUESTION //
/* 

DESCRIPTION:
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

- Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
- Each part will be in a string
- Elements of a pair must be in the same order as in the original array.

Examples of returns:
a = ["az", "toto", "picaro", "zone", "kiwi"] --> [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

*/

// MY SOLUTION //

//PARAMETER: an array => string, no empty

//RESULT: return an array after dividing elements into two no-empty parts

//EXAMPLES:  (Input => Output)
// a = ["az", "toto", "picaro", "zone", "kiwi"] =>> [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

//PSEUDOCODE: function that take in an array of string, iterate over array using map method than divide a list of elements into two non-empty parts and capture it using slice method and join method, than return the result

function partlist(arr) {
    return arr.map((item, index) => [arr.slice(0, index).join(' '), arr.slice(index).join(' ')]).slice(1)
}

//NOTE: using variable, function, loop
// function partlist(arr) {
//     let newArray;
//     let returnArray = [];
//     for (var i = 1; i < arr.length; i++) {
//         newArray = [];
//         newArray.push(arr.slice(0, i).join(" "));
//         newArray.push(arr.slice(i).join(" "));
//         returnArray.push(newArray);
//     }

//     return returnArray;
// }


console.log(partlist(["I", "wish", "I", "hadn't", "come"]), `[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]`)
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), `[["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]`)
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), `[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]`)