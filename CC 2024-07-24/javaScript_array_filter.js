// QUESTION //
/* 

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

*/

// MY SOLUTION //

//PARAMETER: an array => only nums

//RESULT: return an array after filtering odd nums

//EXAMPLES: (Input --> Output) 
// [1, 2, 3, 6, 8, 10] --> [2, 6, 8, 10]
// [1, 3, 9] --> []
// [1, 2] --> [2]

//PSEUDOCODE: create a function that take in an array, filter out the odd nums than return an array without odd nums

function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    return numbersArray.filter(num => num % 2 === 0)
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]), "[2, 6, 8, 10]");
console.log(getEvenNumbers([1, 2]), "[2]");
console.log(getEvenNumbers([12, 14, 15]), "[12, 14]");
console.log(getEvenNumbers([13, 15]), "[]");
console.log(getEvenNumbers([1, 3, 9]),"[]");