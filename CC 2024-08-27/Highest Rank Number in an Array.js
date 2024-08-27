// QUESTION //
/* 
Description:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

//////////////////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> numbers, no string, no empty

//RETURNS: returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

//EXAMPLES: (Input --> Output)
// let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// arr --> 12

//PSEUDOCODE:
// Create a function that take in an array of numbers
// declare variable "obj" and set it to an empty object
// loop over an provided array and track how many number are repeated how many times
// declare variable "numCount" and set it to 0
// declare variable "highestNum" and set ti to null
// With Object.entries(obj) create an array of arrays in which the first position will hold the key (different numbers) and the second one the value (number of times the first key is repeated.
// than we compare which numbers are bigger and set them according to condition
// lastly return the "highestNum" 

//SOLUTION:
function highestRank(arr) {
    const obj = {};
  
    for(let i of arr) {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
    let numCount = 0;
    let highestNum = null;
    Object.entries(obj).forEach((item) => {
        if (item[1] >= numCount) {
            numCount  = item[1];
            highestNum = item[0];
        }
    });
    return Number(highestNum);
}

let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);


//NOTE: Other way to solve this problem
// function highestRank(arr) {
//   let getNum = (num) => arr.filter((n) => n === num).length;
//   return arr.sort((a, b) => getNum(b) - getNum(a) || b - a)[0];
// }

// const highestRank = (arr) => {
//   const counts = arr.reduce((a, c) => ((a[c] = ++a[c] || 1), a), {});

//   let max = 0;
//   let num = 0;

//   for (const k in counts) {
//     if (counts[k] >= max) {
//       max = counts[k];
//       num = Math.max(+k, num);
//     }
//   }

//   return num;
// };