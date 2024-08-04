// QUESTION //
/*

Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

*/


//PARAMETER: an array of strings -> no nums, can be empty

//RETURN: an array of strings where all the rotten fruits are replaced by good ones

//EXAMPLES: (Input --> Output)
// ["apple","rottenBanana","apple"] --> ["apple","banana","apple"]
// ["apple","banana","kiwi","melone","orange"] --> ["apple","banana","kiwi","melone","orange"]
// [] --> []

//PSEUDOCODE: 
// Create a function that take in an array of strings
// Take an array and check if is null/nil/None or empty return empty array ([]).
// if an array is not null/nil/None or empty than return an array after replacing rotten fruit from array with fresh fruit  

//SOLUTION:
function removeRotten(bagOfFruits) {
    return Array.isArray(bagOfFruits) ? bagOfFruits.map(fruit => fruit.toLowerCase().replace('rotten', '')) : []
}

console.log(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
console.log(removeRotten(["apple", "rottenBanana", "apple"]), ["apple","banana","apple"]);
console.log(removeRotten([]), [])

//NOTE: Another way to solve this problem
// return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];