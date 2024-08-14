// QUESTION //
/* 
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];


The questions array is already defined for you and is not the same as the one in the example.
*/


//PARAMETERS: an array of objects -> can be of any datatypes

//RETURNS: return an array after adding a new property usersAnswer to every object in that array

//EXAMPLES: (Input --> Output)

// let questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];

// let answers = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null,
//   },
// ];
// questions --> answers

//PSEUDOCODE: 
// Create a function that take in an array of objects
// loop over given array and add new property "usersAnswer" with value of "null"
// return updated array

//SOLUTION:
function addProperty(array){
    return array.forEach(element => element.usersAnswer = null)
}
// arrow function 
// const addProperty = array => array.forEach(element => element.usersAnswer = null)

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

addProperty(questions)

console.log(questions[0].usersAnswer === null); 

//NOTE: Another way to solve this problem
// questions.forEach(function (i) {
//   i.usersAnswer = null;
// });