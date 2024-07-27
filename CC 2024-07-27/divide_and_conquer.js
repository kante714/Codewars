// QUESTION //
/* 

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/

// MY SOLUTION //

//PARAMETER: an array -> mixed with numbers and strings representation of integes

//RESULT: return a number after adding up the non-string integers and subtracingt the total of the string integers

//EXAMPLES: (Input -> Output)
// [9, 3, "7", "3"] -> 2
// ["5", "0", 9, 3, 2, 1, "9", 6, 7] -> 14
// ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"] -> 13

//PSEUDOCODE: function that take in a mixed array of numbers and string integers,using reduce method to capture if a number is non-string integers or string integers ,if it is non-string integers add a number to total and if it is a string integers subtract a number to total than return a total number

function divCon(x) {
    return x.reduce((total, value) => value === Number(value) ? total + value : total - value, 0)
}
//NOTE: typeof can be use to check if value is number or not


console.log(divCon([9, 3, "7", "3"]), 2);
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 14);
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 13); 