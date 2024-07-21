/* QUESTION 

The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

*/

// MY SOLUTION

//PARAMETER: an array of integers => no string, can be duplicate value

//RESULT: an array after removing the integer with lowest rating

//EXAMPLES: (Input --> Output)
// [1,2,3,4,5] --> [2,3,4,5]
// [5,3,2,1,4] --> [5,3,2,4]
// [2,2,1,2,1] --> [2,2,2,1]

//PSEUDOCODE:
// Create a function that take an array of integers
function removeSmallest(numbers) {
    // define two variable lowest rating and lowest index
    let lowestRating = Infinity
    let lowestIndex = 0

    // loop through an array and capture lowest rating and lowest index 
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < lowestRating){
        lowestRating = numbers[i];
        lowestIndex = i;
      }
    }
   // return an array after removing the lowest rated value 
   return numbers.slice(0, lowestIndex).concat(numbers.slice(lowestIndex + 1));
}

/*

// OPTIMAL SOLUTION //
function removeSmallest(numbers) {
    
    // get index of low rated value
    let indexOfLowestRating = numbers.indexOf(Math.min(...numbers));

    // use slice and concat method to return an array after removing lowest rating value
    return numbers.slice(0, indexOfLowestRating)
    .concat(numbers.slice(indexOfLowestRating + 1))
}

*/

console.log(removeSmallest([1, 2, 3, 4, 5]), "[2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), "[5, 3, 2, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), "[2, 2, 2, 1]");
console.log(removeSmallest([]), "[]");