// QUESTION //
/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


//PARAMETERS: 2 arrays 

//RETURNS: return a single array after removing all values from array a, which are present in array b keeping their order

//EXAMPLES: (Input --> Output)
// [1, 2], [1] --> [2]
// [1, 2, 2], [1] --> [2, 2]
// [1, 2, 2], [2] --> [1]
// [1, 2, 2], [] --> [1, 2, 2]
// [], [1, 2] --> []
// [1, 2, 3], [1, 2] --> [3]

//PSEUDOCODE:
// Create a function that take in 2 arrays
// declare variable "newArray" and set it to an empty array
// loop over provided array "a"
// find values which is in provided array "a" but not in provided array "b" and push those values into "newArray"
// return "newArray" 

//SOLUTION:
function arrayDiff(a, b) {
    let newArray = []
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            newArray.push(a[i]);
        }
    }
    return newArray
}
console.log(arrayDiff([1,2], [1]), [2]);
console.log(arrayDiff([1,2,2], [1]), [2,2]);
console.log(arrayDiff([1,2,2], [2]), [1]);
console.log(arrayDiff([1,2,2], []), [1,2,2]);
console.log(arrayDiff([], [1,2]), []);
console.log(arrayDiff([1,2,3], [1,2]), [3]);

//NOTE: Another way to solve this problem
// function array_diff(a, b) {
//   return a.filter((value) => !b.includes(value));
// }

// function array_diff(a, b) {
//   return a.filter(x => b.indexOf(x) == -1; });
// }

// function array_diff(a, b) {
//   b = new Set(b);
//   return a.filter((v) => !b.has(v));
// }