// QUESTION //
/* 
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
*/


//PARAMETERS: an array -> only 3 numbers / a number -> integer, non negative

//RETURNS: return new array with Tribonacci sequence until provided length "n" (if n === 0 return empty array)

//EXAMPLES: (Input --> Output)
// [0, 0, 0], 10 --> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// [1, 2, 3], 10 --> [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
// [3, 2, 1], 10 --> [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
// [1, 1, 1], 1 --> [1]
// [300, 200, 100], 0 --> []

//PSEUDOCODE:
// Create a function that take in 2 arguments an array of 3 numbers and a positive integer
// loop until length of provided array "signature" is less than provided length "n"
// push sum of last three numbers into provided array "signature" as new number
// return "signature" according to length "n" 

//SOLUTION:
function tribonacci(signature, n) {
    while(signature.length < n){
        signature.push(signature.slice(-3).reduce((sum, num) => sum + num, 0))
    }
    return signature.slice(0,n)
}

console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(tribonacci([1, 2, 3], 10), [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
console.log(tribonacci([3, 2, 1], 10), [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
console.log(tribonacci([1, 1, 1], 1), [1]);
console.log(tribonacci([300, 200, 100], 0), []);

//NOTE: Other way to solve this problem
// function tribonacci(signature,n){  
//   for (let i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

// function tribonacci(signature, n) {
//   const result = signature.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
//   }
//   return result;
// }

// function tribonacci(s, n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
//   }
//   return arr;
// }