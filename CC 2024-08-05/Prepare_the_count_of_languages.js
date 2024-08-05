// QUESTION //
/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
*/


//PARAMETERS: an array of objects -> can be of any datatypes

//RETURNS: an object which includes the count of each coding language represented at the meetup.

//EXAMPLES: (Input --> Output)
// let list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// list1 --> { C: 2, JavaScript: 1, Ruby: 1 }

//PSEUDOCODE:
// create a function that take in an array of objects
// take provided array and loop over it 
// check how many developers has same coding languages value  
// if developers has same coding languages count according to number of developers with same coding languages
// return the result (an object)

//SOLUTION:
function countLanguages(list) {
    return list.reduce((obj, val) => {
        if(val.language in obj) obj[val.language]++
        else obj[val.language] = 1
        return obj
    }, {})
}

let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

let answer = { C: 2, JavaScript: 1, Ruby: 1 };

console.log(countLanguages(list1), answer);

//NOTE: another way to solve this problem
// function countLanguages(list) {
//   var count = {};
//   list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
//   return count;
// }

// const countLanguages = list =>
//   list.reduce((languages, { language }) => {
//     languages.hasOwnProperty(language) ? languages[language]++ : (languages[language] = 1)
//     return languages
//   }, {})
// */