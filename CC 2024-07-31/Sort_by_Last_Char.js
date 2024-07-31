// QUESTION //
/* 

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.

*/

// MY SOLUTION //

//PARAMETER: a string of words

//RESULT: return an array of the words, sorted alphabetically by the final character in each 

//EXAMPLES: (Input --> Output)
// 'man i need a taxi up to ubud' --> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// 'what time are we climbing up the volcano' --> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// 'take me to semynak' --> ['take', 'me', 'semynak', 'to'] 

//PSEUDOCODE: function that take in a string of words, first split the strings into array of words than sort it alphabetically by last character using charCodeAt property inside sort method 

function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}
//NOTE: can be solve using slice method inside sort method 
// x.split(" ").sort((a, b) => a.slice(-1) > b.slice(-1));


console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    