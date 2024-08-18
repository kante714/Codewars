// QUESTION //
/* 
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
*/


//PARAMETERS: an array of objects -> can be of any datatypes

//RETURNS: return an object which includes the count of food options selected by the developers on the meetup sign-up form..

//EXAMPLES: (Input --> Output)
// let list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//     { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];
// let answer = { vegetarian: 2, standard: 1, vegan: 1 };

// list1 --> answer

//PSEUDOCODE:
// Create a function that take in an array of objects
// declare variable "obj" and set it to empty object
// loop over provided array of objects
// add key: value pairs into "obj" with developers meal options as key and count of same food options selected by developers
// return "obj" after adding key: value pairs 

function orderFood(list) {
    let obj = {};
    list.map((dev) => (obj[dev.meal] = obj[dev.meal] ? obj[dev.meal] + 1 : 1));
    return obj;
}

let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

let answer = { vegetarian: 2, standard: 1, vegan: 1 };

console.log(orderFood(list1), answer);


//NOTE: Another way to solve this problem
// const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;

// function orderFood(list) {
//   var res = {};

//   list.forEach(function (item) {
//     res[item.meal] = res.hasOwnProperty(item.meal) ? res[item.meal] + 1 : 1;
//   });

//   return res;
// }

// function orderFood(list) {
//   let foodOrder = {};

//   for (let i = 0; i < list.length; i++) {
//     if (foodOrder[list[i].meal]) {
//       foodOrder[list[i].meal]++;
//     } else {
//       foodOrder[list[i].meal] = 1;
//     }
//   }
//   return foodOrder;
// }