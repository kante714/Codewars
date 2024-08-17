// QUESTION //
/* 
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
*/


//PARAMETERS: a string of binary -> 1 and 0

//RETURNS: return the version the photocopier ('1' becomes '0' and vice versa) gives you as a string.

//EXAMPLES: (Input --> Output)
// "1" --> "0"
// "10000000101101111110011001000" --> "01111111010010000001100110111"
// "100010" --> "011101"

//PSEUDOCODE:
// Create a function that take in a string of binary
// convert provided string of binary into array of binary 
// iterate over array and check if element inside array is either '1' or '0'
// if element is '1' change it to '0' and if element is '0' change it to '1'
// convert array of binary to string of binary 
// return string of binary after changing '1' to '0' and vice versa

//SOLUTION:
function broken(x) {
    return x.split('').map(binary => binary === '1' ? '0' : binary === '0' ? '1' : binary).join('')
}

console.log(broken("1"), "0");
console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
console.log(broken("100010"), "011101");

//Note: Another way to solve this problem
// const broken = (x) => x.replace(/\d/g, (val) => val ^ 1);