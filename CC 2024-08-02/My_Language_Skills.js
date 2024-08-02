// QUESTION //
/*

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/


// MY SOLUTION //

//PARAMETER: an object -> languages as key and test results as value, no duplicate values

//RESULT: return the list of languages where your test score is at least 60, in descending order of the scores.

//EXAMPLES: (Input --> Output)
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


//PSEUDOCODE: create a function that take in an object with no duplicate values, declare variable 'keys' and set it to an array of all the keys capture from provided object,sort an array in descending order of the test scores, return an array of all the languages where test score >= 60 

function myLanguages(results) {
    let keys = Object.keys(results)
    keys.sort((a, b) => results[b] - results[a])
    return keys.filter(key => results[key] >= 60)
}
//NOTE: short cut 
// Object.keys(results).sort((a,b) => results[b] - results[a]).filter(r => results[r] > 59)

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
