// QUESTION //
/*

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

// MY SOLUTION //

//PARAMETER: an array => string, can be different in lengths, no nums

//RESULT: returns a sorted array containing the same strings, ordered from shortest to longest

//EXAMPLES: (Input --> Output)
// ["Beg", "Life", "I", "To"] -- > ["I", "To", "Beg", "Life"]
// ["", "Moderately", "Brains", "Pizza"] --> ["", "Pizza", "Brains", "Moderately"]
// ["Longer", "Longest", "Short"] --> ["Short", "Longer", "Longest"]

//PSEUDOCODE: Create a function that take an array of strings, 
function sortByLength(array) {
    // Return an array containing the same strings,
    let sortedArray = array.sort((a, b) => a.length - b.length)
    // ordered from shortest to longest
    return sortedArray;
}

// ONE LINE SOLUTION //
// const sortByLength = array => array.sort((a,b) => a.length - b.length)

console.log(sortByLength(["Beg", "Life", "I", "To"]),'["I", "To", "Beg", "Life"]');

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),'["", "Pizza", "Brains", "Moderately"]');

console.log(sortByLength(["Longer", "Longest", "Short"]),'["Short", "Longer", "Longest"]');



