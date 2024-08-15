// QUESTION //
/* 
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/


//PARAMETERS: an array -> no duplicate

//RETURNS: return an array after rearranging the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

//EXAMPLES: (Input --> Output)
// [15,11,10,7,12] --> [15,7,12,10,11]
// [91,75,86,14,82] --> [91,14,86,75,82]
// [84,79,76,61,78] --> [84,61,79,76,78]
// [52,77,72,44,74,76,40] --> [77,40,76,44,74,52,72]
// [1,6,9,4,3,7,8,2] --> [9,1,8,2,7,3,6,4]
// [78,79,52,87,16,74,31,63,80] --> [87,16,80,31,79,52,78,63,74]

//PSEUDOCODE:
// Create a function that take in array of unique elements
// create a new array "sort" which is copy of original array but in ascending order
// map through original array, and if index position leaves remainder of 0 when divided by 2, return sort.pop() else return sort.shift() (first element of sorted array)


//SOLUTION:
function solve(arr){
    let sort = [...arr].sort((a, b) => a - b);
    return arr.map((el, index) => {
    if (index % 2 == 0) {
        return sort.pop();
    } else {
        return sort.shift();
    }
    });
};

console.log(solve([15,11,10,7,12]),[15,7,12,10,11]);
console.log(solve([91,75,86,14,82]),[91,14,86,75,82]);
console.log(solve([84,79,76,61,78]),[84,61,79,76,78]);
console.log(solve([52,77,72,44,74,76,40]),[77,40,76,44,74,52,72]);
console.log(solve([1,6,9,4,3,7,8,2]),[9,1,8,2,7,3,6,4]);
console.log(solve([78,79,52,87,16,74,31,63,80]),[87,16,80,31,79,52,78,63,74]);


//NOTE: Another way to solve this problem
// function solve(arr) {
//   var minMax = [];
//   arr.sort((a, b) => a - b);
//   for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
//     if (i != j) minMax.push(arr[j]), minMax.push(arr[i]);
//     else minMax.push(arr[i]);
//   }
//   return minMax;
// }

// const solve = arr => [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

// function solve(arr){
//   const output = [];
//   arr.sort((a, b)=> a - b);
  
//   while( arr.length > 0 ){
//     output.push(arr.pop())
//     output.push(arr.shift())
//   }
//   return output.filter(e => e)
// };