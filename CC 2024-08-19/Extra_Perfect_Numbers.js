// QUESTION //
/*
Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N

Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.
*/


//PARAMETERS: a integer -> always positive

//RETURNS: return the extra perfect numbers in range from 1 to N

//EXAMPLES: (Input --> output)
// 3 --> [1,3]
// 5 --> [1,3,5]
// 7 --> [1,3,5,7]
// 28 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
// 39 --> [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]

//PSEUDOCODE:
// Create a function that take in a positive integer
// declare variable "perfectNumbers" and set it ot an empty array
// loop over provided integer "n" and check if numbers range from 1 to "n" is even or odd
// if odd push numbers to "perfectNumbers" 
// return "perfectNumbers" 

//SOLUTION:
function extraPerfect(n) {
    let perfectNumbers = []
    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
            perfectNumbers.push(i)
        }
    }
    return perfectNumbers
}

console.log(extraPerfect(3), [1,3]);
console.log(extraPerfect(5), [1,3,5]);
console.log(extraPerfect(7), [1,3,5,7]);
console.log(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
console.log(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);

//NOTE: Another way to solve this problem
// function extraPerfect(n) {
//   let array = [];

//   for (var i = 1; i <= n; i += 2) {
//     array.push(i);
//   }
//   return array;
// }

// function extraPerfect(n) {
//   return Array.from({ length: n + 1 }, (_, i) => i).filter((x) => x % 2);
// }