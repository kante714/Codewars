// QUESTION //
/* 
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false

Try to avoid using the % (modulo) operator.
*/



//PARAMETERS: a string -> series of digits 

//RETURNS: return true if sum of all integers in given string is divisible by 3 else return false (Try to avoid using the % (modulo) operator.)

//EXAMPLES: (Input --> Output)
// "123"      --> true
// "8409"     --> true
// "100853"   --> false
// "33333333" --> true
// "7"        --> false

//PSEUDOCODE:
// Create a function that take in a string of integers
// declare variable "num" 
// take given string of integers, sum all of integers, divided sum by 3 and store it in variable "num"
// check if "num" is integer or float 
// return true if integer, return false if float


//SOLUTION:
function divisibleByThree(str) {
    let num =  str.split('').reduce((sum, num) => sum + Number(num), 0) / 3
    return num === parseInt(num) 
}

console.log(divisibleByThree('123'), true)
console.log(divisibleByThree('19254'), true)
console.log(divisibleByThree('88'), false)
console.log(divisibleByThree('1'), false)

//NOTE: Another way to solve this problem
// const divisibleByThree = str => !([...str].reduce((pre, val) => +val + pre, 0) % 3);

// function divisibleByThree(str) {
//   return str.split("").reduce((a, b) => parseInt(a) + parseInt(b)) % 3 === 0;
// }