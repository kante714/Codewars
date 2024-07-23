// QUESTION //
/*

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/

// MY SOLUTION //

//PARAMETER: an array and a limit value => always numbers, no empty  

//RESULT: return true if values in array are <= limit value else return false

//EXAMPLES: (Input --> Output)
// [66, 101], 200 --> true
// [78, 117, 110, 99, 104, 117, 107, 115], 100 --> false
// [101, 45, 75, 105, 99, 107], 107 --> true
// [80, 117, 115, 104, 45, 85, 112, 115], 120 --> true

//PSEUDOCODE: Create a function that take 2 arguments an array and a limit value, check if all values in an array are smaller or equal to a limit values using every method 

function smallEnough(a, limit) {
    return a.every(num => num <= limit)
}

//NOTE: can be done using Math.max() 

console.log(smallEnough([66, 101], 200), "true");
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), "false");
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), "true");
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), "true");
