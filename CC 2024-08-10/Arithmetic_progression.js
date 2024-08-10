// QUESTION //
/* 
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/


//PARAMETERS: 3 parameters -> first element (a), difference (d) and number of elements to return (n), d can be zero

//RETURNS: return the string version of first n elements of the sequence with the given common difference d and first element a

//EXAMPLES: (Input --> Output)
// 1, 2, 5 --> "1, 3, 5, 7, 9"
// 1, 0, 5 --> "1, 1, 1, 1, 1"
// 1, -3, 10 --> "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
// 100, -10, 10 --> "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"

//PSEUDOCODE:
// Create a function that take in 3 arguments first element (a), difference (d) and number of elements to return (n)
// declare variable "number" and set it to provided value "a"
// declare variable "arrayOfNumbers" and set ti to an array with only "a" as element in it
// loop "n" times and push number into "arrayOfNumbers" according to difference value "d"
// return after converting all the numbers in "arrayOfNumbers" as string,separated by comma and space

//SOLUTION:
function arithmeticSequenceElements(a, d, n) {
    let number = a;
    let arrayOfNumbers = [a];

    for(let i = 1; i < n; i++) {
        number += d;
        arrayOfNumbers.push(number);
    }

    return arrayOfNumbers.join(", ");
}

console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
console.log(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
console.log(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");

//NOTE: Another way to solve this problem
// const arithmeticSequenceElements = (a, r, n) => Array.from({ length: n }, (_, index) => a + r * index).join(", ");

// function arithmeticSequenceElements(a, d, n) {
//   let nums = [a];
//   while (--n) nums.push((a += d));
//   return nums.join(", ");
// }