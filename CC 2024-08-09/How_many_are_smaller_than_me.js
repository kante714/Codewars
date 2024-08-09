// QUESTION //
/* 
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/


//PARAMETERS: an array -> only integers, no string

//RETURNS: returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

//EXAMPLES: (Input --> Output)
// [5, 4, 3, 2, 1] --> [4, 3, 2, 1, 0]
// [1, 2, 0] --> [1, 1, 0]

//PSEUDOCODE:
// Create a function that take in an array of integers
// take an array and loop over it 2 time
// first loop will capture all the numbers and index of numbers in an array 
// second loop will get and return an array containing at each index i the amount of numbers that are smaller than number to the right

//SOLUTION:
function smaller(nums) {
    return nums.map((number, index) => {
        return nums.slice(index).reduce((total, numberToCompare) => numberToCompare < number ? total + 1 : total, 0);
    });
}

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);

//NOTE: another way to solve this problem
// const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

// const smallerThan = (n) => (v) => v < n;
// const smaller = (numbers) =>
//   numbers.map((number, index) => {
//     const numbersOnTheRight = numbers.slice(index);
//     const smallerThanCurrentNumber = numbersOnTheRight.filter(
//       smallerThan(number)
//     );
//     const smallerThanCurrentNumberCount = smallerThanCurrentNumber.length;

//     return smallerThanCurrentNumberCount;
//   });
