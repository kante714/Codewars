// QUESTION //
/* 
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/


///////////////////////////////////////////////////////////////////////////

//PARAMETERS: 2 arrays -> strings

//RETURNS: return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2

//EXAMPLES: (Input --> Output)
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// a1 = ["xyz", "live", "strong"];
// a1, a2 --> ["live", "strong"]

// a1 = ["live", "strong", "arp"];
// a1, a2 --> ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"];
// a1, a2 --> []

//PSEUDOCODE:
// Create a function that take in 2 arrays of strings
// filtered down to just  the strings of "array1" which are substrings of strings of "array2"
// sort that filtered in lexicographical order
// return new filtered array 

//SOLUTION:
function inArray(array1, array2) {
    return array1
    .filter((word1) => array2.some((word2) => word2.includes(word1)))
    .sort();
}


a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2), ["live", "strong"]);

a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2), ["arp", "live", "strong"]);

a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2), []);

//NOTE: Other way to solve this problem
// function inArray(array1, array2) {
//     let str = array2.join(" ");
//     return array1.filter((word) => str.indexOf(word) !== -1).sort();
// }


// function inArray(a1, a2) {
//   let r = [];

//   for (let i = 0; i < a1.length; i++) {
//     var s1 = a1[i];

//     for (let j = 0; j < a2.length; j++) {
//       let s2 = a2[j];

//       if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
//         r.push(s1);
//       }
//     }
//   }

//   return r.sort();
// }