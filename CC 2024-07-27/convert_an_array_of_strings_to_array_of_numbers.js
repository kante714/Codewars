// QUESTION //
/*

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

*/

// MY SOLUTION //

//PARAMETER: an array -> sequence of numbers as strings , not num, can be floats

//RESULT: return a sequence of numbers 

//EXAMPLES: (Input -> Output)
// ["1", "2", "3"] -> [1, 2, 3]

//PSEUDOCODE: function that take an array containing sequence of numbers represented as strings, use Number method to convert an array of string to an array of numbers than return it

function toNumberArray(stringarray) {
    return stringarray.map(string => Number(string))
}

console.log(toNumberArray(["1.1","2.2","3.3"]), "[1.1,2.2,3.3]");
console.log(toNumberArray(["1", "2", "3"])," [1, 2, 3]");




