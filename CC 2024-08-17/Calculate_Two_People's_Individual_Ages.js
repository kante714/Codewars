// QUESTION //
/* 
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/


//PARAMETERS: 2 numbers (sum, age difference) -> can have negative numbers

//RETURNS: returns a pair of values (oldest age first) if those exist or null/None if:
// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

//EXAMPLES: (Input --> Output)
// 24, 4 --> [14, 10]
// 63, -14 --> null

//PSEUDOCODE: 
// Create a function that take in 2 arguments sum and age difference
// declare variable "oldestAge" and set it to highest individual age  -> ((sum - difference) / 2 ) + difference
// declare variable "youngestAge" and set it to lowest individual age -> (sum - difference) / 2
// check if "sum", "difference", "oldestAge" and "youngestAge" is greater than or equal to 0
// return array with value of both "oldestAge" and "youngestAge" if "sum", "difference", "oldestAge" and "youngestAge" is greater than or equal to 0 else return null

//SOLUTION:
function getAges(sum,difference){
    let oldestAge = ((sum - difference) / 2 ) + difference
    let youngestAge = (sum - difference) / 2; 
    return [sum, difference, oldestAge, youngestAge].every(num => num >= 0) ? [oldestAge, youngestAge] : null;
};

console.log(getAges(24, 4), [14, 10]);
console.log(getAges(63, -14), null);

//NOTE: Another way to solve this problem
// const getAges = (sum, difference) => sum < 0 || difference < 0 || sum < difference ? null : [(sum + difference) / 2, (sum - difference) / 2];