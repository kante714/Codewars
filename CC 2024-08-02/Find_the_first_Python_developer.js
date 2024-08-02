// QUESTION //
/* 

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.

Notes:

The input array will always be valid and formatted as in the example above.


*/

// MY SOLUTION //

//PARAMETER: an array of objects -> can be of any datatype, no empty

//RESULT: return < firstName here >, < country here > of the first Python developer who has signed up; or There will be no Python developers if no Python developer has signed up.

//EXAMPLES: (Input --> Output)
// var list1 = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// list1 --> 'Victoria, Puerto Rico'

//PSEUDOCODE: create a function that take in an array of objects, declare variable 'pythonDeveloper', loop over the given array and find the developer whose language equal "Python" and store it in 'pythonDeveloper', return develper firstname and country as string if language equal "Python" else return "There will be no Python developers"

function getFirstPython(list) {
    let pythonDeveloper = list.find((dev) => dev.language === "Python" );
    return pythonDeveloper ? `${pythonDeveloper.firstName}, ${pythonDeveloper.country}` : "There will be no Python developers"
}

var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

var list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

console.log(getFirstPython(list1), 'Victoria, Puerto Rico');
console.log(getFirstPython(list2), 'There will be no Python developers');


//NOTE: LONG SOLUTION
// function getFirstPython(list) {
//   for (let i = 0; i < list.length; ++i)
//     if (list[i].language == "Python")
//       return list[i].firstName + ", " + list[i].country;
//   return "There will be no Python developers";
// }