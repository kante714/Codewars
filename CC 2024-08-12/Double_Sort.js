// QUESTION //
/* 
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/


//PARAMETERS: an array -> can be either numbes or strings, or a mix of both, no empty  

//RETURNS: return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order

//EXAMPLES: (Input --> Output)
// [1, 2, 3, 4, 5] --> [1, 2, 3, 4, 5]
// ["Banana", "Orange", "Apple", "Mango", 0, 2, 2] --> [0,2,2,"Apple","Banana","Mango","Orange"]
// ["C", "W", "W", "W", 1, 2, 0] --> [0,1,2,"C","W","W","W"]

//PSEUDOCODE:
// Create a function that take in an array with mix datatypes
// declare variable "arrOfNumber" and "arrOfString" and set them to empty array
// loop over provided array and check if element in an array is a string or a number
// if an element is a number push it to "arrOfNumber" else push it to "arrOfString"
// sort "arrOfNumber" in ascending order and "arrOfString" in a alphabetic order 
// return single array after concating both sorted array

//SOLUTION:
function dbSort(a) {
    let arrOfNumber = []
    let arrOfString = []
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'number'){
            arrOfNumber.push(a[i])
        }else{
            arrOfString.push(a[i])
        }
    }
    return arrOfNumber.sort((a, b) => a - b).concat(arrOfString.sort((a, b) => a.localeCompare(b)))
}

console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'])

//NOTE: Another way to solve this problem
// function dbSort(a) {
//     const numbers = a.filter(el => typeof el === 'number').sort((a, b) => a - b)
//     const strings = a.filter(el => typeof el === 'string').sort((a, b) => a.localeCompare(b))

//     return [...numbers, ...strings]
// }

// const dbSort = a => [
//   ...a.filter(element => typeof element === 'number').sort((a, b) => a - b),
//   ...a.filter(element => typeof element === 'string').sort((a, b) => a.localeCompare(b)),
// ]

// function dbSort(a) {
//   let num = a.filter((x) => typeof x == "number").sort((a, b) => a - b);
//   let string = a.filter((x) => typeof x == "string").sort();
//   return num.concat(string);
// }