/* QUESTION

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

*/

// MY SOLUTION //

//PARAMETER: an array of integers => can be negative integers, can be empty

//RESULT: whether the sum of the array elements is "odd" or "even"

//EXAMPLES: (Input --> Output)
// [0] --> 'even'
// [0, 1, 4] --> 'odd'
// [0, -1, -5] --> 'even'

//PSEUDOCODE:
// Create function that take an array of integers(array) 
function oddOrEven(array) {
    // sum array using reduce method
    let sumOFArray = array.reduce((sum, num) => sum + Number(num), 0)

    // return 'even' or 'odd' using conditional statement
    if(sumOFArray % 2 === 0) return "even"
    else return 'odd'
} 

console.log(oddOrEven([0, 1, -4]), "odd");
console.log(oddOrEven([-1023, -1, 3]), "odd");
console.log(oddOrEven([0]), "even");
console.log(oddOrEven([0, -1, -5]), "even");
console.log(oddOrEven([0, 1, 4]), "odd");
console.log(oddOrEven([]), "even");

