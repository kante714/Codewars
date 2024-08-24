// QUESTION //
/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/

//////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> numbers, length 2 or greater / a target number  

//RETURNS: return array of indices of 2 items which sum give provided target number 

//EXAMPLES: (Input --> Output)
// [1, 2, 3], 4  --> [0, 2] or [2, 0]
// [3, 2, 4], 6  --> [1, 2] or [2, 1]

//PSEUDOCODE:
// Create a function that take in 2 arguments an array of numbers and a target number
// loop over provided array "numbers" to iterate through all the elements
// again loop over provided array "numbers" to iterate through all the elements that are after the one that is being iterated in the last loop
// check if the sum of the element iterated in the first loop (i) + the one being iterated in the last loop (j) is equal to the target
// return array of indices of those 2 element

//SOLUTION:
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let res = numbers[i] + numbers[j];
            if (res == target) return [i, j];
        }
    }   
}

console.log(twoSum([1, 2, 3], 4), [0, 2] || [2, 0])
console.log(twoSum([3, 2, 4], 6), [1, 2] || [2, 1])