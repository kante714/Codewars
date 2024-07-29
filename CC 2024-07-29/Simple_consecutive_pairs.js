// QUESTION //
/* 
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.

More examples in the test cases.
*/


//PARAMETERS: an array -> nums, can be mixture of positives, negatives or zeros

//RETURNS: the count of pairs that have consecutive numbers

//EXAMPLES:(Input --> Output)
// [1,2,5,8,-4,-3,7,6,5] --> 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]

//PSEUDOCODE:
// create a function that take in an array
// take that array and capture the pairs of numbers from it
// remove null and undefined from an array using filter method
// if the numbers in the pair are consecutive add 1 to total 
// return the total of pairs that have consecutive numbers

//SOLUTION:
function pairs(ar){
    return ar
        .map((number, index) => index % 2 === 0 ? [number, ar[index + 1]] : null)
        .filter(Boolean)
        .reduce((total, [firstNumber, secondNumber]) => {
            if (firstNumber + 1 === secondNumber || firstNumber === secondNumber + 1)
            return total + 1;
            return total;
        }, 0);
};

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);

//NOTE: another way to solve this problem

// function pairs(ar){
//     return ar.reduce((total, number, index) => {
//     if (index % 2 !== 0 || index === ar.length) return total

//     let nextNumber = ar[index + 1]
//     return total + (Math.abs(number - nextNumber) === 1)}, 0)
// };

// function pairs(array) {
//   let count = 0
//   for (let i = 0; i < array.length; i += 2)
//     if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
//   return count;
// }

