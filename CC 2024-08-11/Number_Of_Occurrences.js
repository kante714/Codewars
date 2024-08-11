// QUESTION //
/* 
Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;
*/


//PARAMETERS: an array -> nums, can have duplicate nums

//RETURNS: returns the number of occurrences of an element in an array

//EXAMPLES: (Input --> Output)
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) --> 1;
// arr.numberOfOccurrences(4) --> 0;
// arr.numberOfOccurrences(2) --> 2;
// arr.numberOfOccurrences(3) --> 1;

//PSEUDOCODE:
// defined a property of Array with the help of the method Object.defineProperty
// define a function 'numberOfOccurrences' and set it to return the number of occurrences of an element in an array

//SOLUTION:
Object.defineProperty(Array.prototype, "numberOfOccurrences", {
    value: function numberOfOccurrences(element) {
        return this.reduce((count, num) => (num === element) ? count + 1 : count, 0)
    },
});

let arr = [0, 1, 2, 2, 3];
console.log(arr.slice().numberOfOccurrences(0), 1);
console.log(arr.slice().numberOfOccurrences(4), 0);
console.log(arr.slice().numberOfOccurrences(2), 2);
console.log(arr.slice().numberOfOccurrences(3), 1);
