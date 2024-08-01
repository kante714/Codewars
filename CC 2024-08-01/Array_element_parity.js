// QUESTION //
/* 

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

*/

// MY SOLUTION //

//PARAMETER: an array of integers -> can have both negative and positive values except one integer is either only negative or only positive

//RESULT: return the integer which is either only negative or only positive

//EXAMPLES: (Input --> Output)
// [1, -1, 2, -2, 3] -> 3
// [-3, 1, 2, 3, -1, -4, -2] --> -4
// [1, -1, 2, -2, 3, 3] --> 3

//PSEUDOCODE: function that take in an array of integers,take that array and use not operator with includes method inside find method to capture the number which is either only positive or only negative

function solve(arr){
    return arr.find(num => !arr.includes(-num))
};

console.log(solve([1, -1, 2, -2, 3]), '3');
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), '-4');
console.log(solve([1, -1, 2, -2, 3, 3]), '3');
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), '-38');
console.log(solve([-9, -105, -9, -9, -9, -9, 105]), '-9');