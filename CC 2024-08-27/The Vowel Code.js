// QUESTION //
/* 
Description:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

///////////////////////////////////////////////////////////////////////////////////

//PARAMETERS: a string -> only lowercase

//RETURNS: for encode function return a string after replacing all the lowercase vowels in a given string with numbers according to the provided pattern. for decode function return a string after turning the numbers back into vowels according to the same pattern.

//EXAMPLES: (Input --> Output)
// encode('hello') --> 'h2ll4'
// encode('How are you today?') --> 'H4w 1r2 y45 t4d1y?'
// encode('This is an encoding test.') --> 'Th3s 3s 1n 2nc4d3ng t2st.'
// decode('h2ll4') --> 'hello'

//PSEUDOCODE:
// Create 2 functions "encode" and "decode" both function taking 1 argument "string"
// declare variable "vowels" and set it to an array of vowels string
/* for "encode" function : first split string into an array than loop over that array ,
if "vowels" includes any char from an array than replace that char with (1 + index of that char) else do nothing to that char, than join an array into string, return that string
/* for "decode" function : first split string into an array than loop over that array ,
if char is a number than replace it with vowel which is in (charNumber - 1) index of an array "vowels" else do nothing to that char, than join an array into string, return that string
 */

//SOLUTION:
function encode(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    return string.split('')
    .map((char) => (vowels.includes(char) ? vowels.indexOf(char) + 1 : char))
    .join("");
}

function decode(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    return string.split('')
    .map((char) => (Number(char) ? vowels[Number(char) - 1] : char))
    .join("");
}

console.log(encode("hello"), "h2ll4");
console.log(encode("How are you today?"), "H4w 1r2 y45 t4d1y?");
console.log(encode("This is an encoding test."), "Th3s 3s 1n 2nc4d3ng t2st.");
console.log(decode("h2ll4"), "hello");

//NOTE: Other way to solve this problem
// // turn vowels into numbers
// function encode(string){
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }
// //turn numbers back into vowels
// function decode(string){
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }

// function encode(string){
//   var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
//   return codeStringGivenMapping(string, vowelMapping);
// }
// function decode(string){
//   var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
//   return codeStringGivenMapping(string, vowelMapping); 
// }
// function codeStringGivenMapping(string, mapping){
//   return string.split('').map(function(char){
//     return mapping[char] || char;
//   }).join(''); 
// }

// function encode(string) {
//   let output = "";
//   for(let i = 0; i < string.length; i++) {
//     switch(string[i]) {
//       case 'a': output+= "1"
//         break;
//       case 'e': output+= "2"
//         break;
//       case 'i': output+= "3"
//         break;
//       case 'o': output+= "4"
//         break;
//       case 'u': output+= "5"
//         break;
//       default: output += string[i];
//     }
//   }
//   return output;
// }
// function decode(string) {
//   let output = "";
//   for(let i = 0; i < string.length; i++) {
//     switch(string[i]) {
//       case '1': output+= "a"
//         break;
//       case '2': output+= "e"
//         break;
//       case '3': output+= "i"
//         break;
//       case '4': output+= "o"
//         break;
//       case '5': output+= "u"
//         break;
//       default: output += string[i];
//     }
//   }
//   return output;
// }