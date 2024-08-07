// QUESTION //
/* 
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/


//PARAMETERS: an array -> only 5 strings ('a', 'b' or 'c')

//RETURNS: return true if the array containes three and two of the same values else return false 

//EXAMPLES: (Input --> Output)
// ["a", "a", "a", "b", "b"] --> true  
// ["a", "b", "c", "b", "c"] --> false 
// ["a", "a", "a", "a", "a"] --> false 

//PSEUDOCODE:
// create a function that take in an array of only 5 strings
// declare variable 'totalA', 'totalB' and 'totalC' and set all to 0
// Add 1 to each variable according to the number of same strings
// return true if the array containes 3 and 2 of the same values else return false 

//SOLUTION:
function checkThreeAndTwo(array) {
    let totalA = 0
    let totalB = 0
    let totalC = 0
 
    array.reduce((total,element) => element === "a" ? total + totalA++ : element === "b" ? total + totalB++ : total + totalC++, 0)

    if (totalA === 3 && (totalB === 2 || totalC === 2)) return true;
    if (totalB === 3 && (totalA === 2 || totalC === 2)) return true;
    if (totalC === 3 && (totalA === 2 || totalB === 2)) return true;    
    return false;
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false);

//NOTE: Another way to solve this problem
// function checkThreeAndTwo(array) {
//   const counts = array.reduce((result, letter) => {
//     if (result[letter]) {
//       result[letter]++;
//     } else {
//       result[letter] = 1;
//     }

//     return result;
//   }, {});

//   const containsThree = Object.values(counts).some((x) => x === 3);
//   const containsTwo = Object.values(counts).some((x) => x === 2);

//   return containsThree && containsTwo;
// }

// function checkThreeAndTwo(array) {
//   let as = array.filter((x) => x === "a").length;
//   let bs = array.filter((x) => x === "b").length;
//   let cs = array.filter((x) => x === "c").length;
//   return (
//     (as === 3 || bs === 3 || cs === 3) && (as === 2 || bs === 2 || cs === 2)
//   );
// }

// const totalLetters = (array, string) =>
//   array.filter((element) => element === string).length;

// const checkThreeAndTwo = (array) => {
//   const totalA = totalLetters(array, "a");
//   const totalB = totalLetters(array, "b");
//   const totalC = totalLetters(array, "c");

//   if (totalA === 3 && (totalB === 2 || totalC === 2)) return true;
//   if (totalB === 3 && (totalA === 2 || totalC === 2)) return true;
//   if (totalC === 3 && (totalA === 2 || totalB === 2)) return true;

//   return false;
// };