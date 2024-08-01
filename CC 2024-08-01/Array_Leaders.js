// QUESTION //
/* 

Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).



*/

// MY SOLUTION //

//PARAMETER: an arry of integers -> size is at least 3, nums will be mixture of positives, negatives and zeros, can have duplicates numbers

//RESULT: return all the LEADERS(greater than The Sum of all the elements to its right side) in the array in the same order in the original array
 
//EXAMPLES: (Input --> Output)
// [1, 2, 3, 4, 0] --> [4]
// [16, 17, 4, 3, 5, 2] --> [17, 5, 2]
// [5, 2, -1] --> [5, 2]

//PSEUDOCODE: create function that take in an array of integers with at least 3 elements, loop over an array of numbers provided, declare variable 'rightSideSum', get the sum of all the elemetns to right side of element and store it in 'rightSideSum', return all numbers which are greater than the sum of all the elements to its right side in the same order in the original array

function arrayLeaders(numbers) {
    return numbers.filter((number, index) => {
        let rightSideSum = numbers.slice(index + 1).reduce((total, number) => total + number, 0)
        return number > rightSideSum
    })
}

console.log(arrayLeaders([1, 2, 3, 4, 0]), "[4]");
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), "[17, 5, 2]");
console.log(arrayLeaders([5, -2, 2]), "[5, 2]");
console.log(arrayLeaders([0, -1, -29, 3, 2]), "[0, -1, 3, 2]");


//NOTE: SOLUTION USING NESTED FOR LOOP, VARIABLES AND CONDITIONAL 
// let arrayLeaders = numbers => {
//   let answer = [];

//   for (let i=0; i<numbers.length; i++){          //loop through array
//     let sum = 0;
//     for (let j=i+1; j<numbers.length; j++){      //start one position right of the main loop element
//       sum += numbers[j];                         //add all those numbers together
//     }
    
//     if(numbers[i] > sum){                        //compare that sum to the initial number
//       answer.push(numbers[i]);                   //if it's bigger push it to the answer array
//     }
//   }
//   return answer;                                 //return it like it's defective
// } 