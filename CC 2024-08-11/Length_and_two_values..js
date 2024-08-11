// QUESTION //
/* 
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/


//PARAMETERS: an integer (n) -> no string, can be 0 and two other values -> can be boolean value or string value  

//RETURNS: return an array of size n filled with these two values alternating

//EXAMPLES: (Input --> Output)
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

//PSEUDOCODE:
// Create a function that take in 3 arguments an integer and two other values
// declare variable "arr" ans set it to empty array
// loop and check if num is even or odd 
// if num is even push provided firstValue to "arr" else push provided secondValue to "arr"
// return "arr"

//SOLUTION:
function alternate(n, firstValue, secondValue) {
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return arr
}

console.log(alternate(5, true, false), [true, false, true, false, true]);
console.log(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
console.log(alternate(0, "lemons", "apples"), []);
  

//NOTE: Another way to solve this problem
// function alternate(n, firstValue, secondValue){
//   return Array.from({length : n}, ( _ , i ) => i % 2 === 0 ? firstValue : secondValue);
// }