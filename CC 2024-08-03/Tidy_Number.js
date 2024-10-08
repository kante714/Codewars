// QUESTION //
/*

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3



*/

// MY SOLUTION //

//PARAMETER: a number -> not array, always positive

//RESULT: return true if number is tidy else return false

//EXAMPLES: (Input --> Output)
// 12 --> true
// 102 --> false
// 9672 --> false
// 2789 --> true
// 2335 --> true

//PSEUDOCODE: 
// create a function that take in a number 
// declare variable 'nonDecreasingOrder' and set it to a number whose digits are in non-decreasing order
// return true if 'nonDecreasingOrder' equal to n (a number provided) else return false


function tidyNumber(n) {
    let nonDecreasingOrderNum = Number(
        [...String(n)]
        .map(Number)
        .sort((a, b) => a - b)
        .join("")
    ) 
    return nonDecreasingOrderNum === n
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);

//NOTE: long solution 
// const tidyNumber = (n) => {
//   let s = n.toString();
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] > s[i + 1]) return false;
//   }
//   return true;
// };