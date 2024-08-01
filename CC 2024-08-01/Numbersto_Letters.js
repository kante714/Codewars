// QUESTION //
/* 

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

*/

// MY SOLUTION //

//PARAMETER: an array of numbers -> string

//RESULT: return a string (letters of the alphabet) 

//EXAMPLES: (Input --> Output)
// ['24', '12', '23', '22', '4', '26', '9', '8'] --> 'codewars'
// ['25','7','8','4','14','23','8','25','23','29','16','16','4'] --> 'btswmdsbd kkw'
// ['4', '24'] --> 'wc'

//PSEUDOCODE: create a function that take in an array of string numbers, declare variable 'numXalpha' and set it as empty object, declare variable 'alphabet' and set it as array of alphabet letters, loop over an 'alphabet' array amd get key: value pairs than add it to 'numXalpha' object, declare variable 'extraChars' and set key: value pairs according to the question, declare variable 'dictionary' and set it to object of 'numXalpha' and 'extraChars', return a string of alphabet letters transform from an array of string numbers 

function switcher(x) {
    let numXalpha = {}
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for(let i = alphabet.length; i > 0; i--){
        numXalpha[i] = alphabet[26 - i]
    }
    let extraChars = { 27: "!", 28: "?", 29: " " };
    let dictionary = { ...numXalpha, ...extraChars };

    return x.map((char) => dictionary[char] || "").join("");
}


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
console.log(switcher(['4', '24']), 'wc');

//NOTE: can be solve like below as well
// function switcher(x) {
//     return x.reduce((word, number) => `${word}${' ?!abcdefghijklmnopqrstuvwxyz'[29 - number]}`, '')
// }
//NOTE: Short cut
// const alpha = " zyxwvutsrqponmlkjihgfedcba!? ";
// const switcher = (x) => x.map((item) => alpha[item]).join("");