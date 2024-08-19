// QUESTION //
/* 
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/


//PARAMETERS: a string of four words 

//RETURNS: return a string after truning them into Gordon language

//EXAMPLES: (Input --> Output)
// 'What feck damn cake' --> 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
// 'are you stu pid' --> '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
// 'i am a chef' --> '*!!!! @M!!!! @!!!! CH*F!!!!'  

//PSEUDOCODE:
// Create a function that take in a string of four words
// take provided string "a" and convert it words to upper case
// if letter is 'a' or 'A' replace it by '@'
// if letter is either 'e', 'i', 'u', 'o' replace them by '*'
// convert a string to array than loop over that array
// add '!!!!' to every words 
// join an array as a string
// return joined string

//SOLUTION:
function gordon(a) {
    return a
    .toUpperCase()
    .replace(/[A]/gi, "@")
    .replace(/[eiuo]/gi, "*")
    .split(' ')
    .map(word => word + "!!!!").join(' ');
}

console.log(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
console.log(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
console.log(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');    

//NOTE: Another way to solve this problem
// function gordon(ramsay) {
//   return ramsay
//     .toUpperCase()
//     .replace(/\w+/g, "$&!!!!")
//     .replace(/[AEIOU]/g, (v) => (v == "A" ? "@" : "*"));
// }

// const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");
