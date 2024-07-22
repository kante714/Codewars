// QUESTION //
/* 

Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

*/

// MY SOLUTION //

//PARAMETER: a word => single non-empty string, only lowercase and uppercase letters 

//RESULT: returns an ordered list containing the indices of all capital (uppercase) letters in the string

//EXAMPLES:(Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


//PSEUDOCODE: Create a function that take a word and store it in variable 
var capitals = function (word) {
    let arrayWithIndexOfCapitals = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        arrayWithIndexOfCapitals.push(i);
      }
    }
    return arrayWithIndexOfCapitals;  
};

console.log(capitals("CodEWaRs"), "[0, 3, 4, 6]");
