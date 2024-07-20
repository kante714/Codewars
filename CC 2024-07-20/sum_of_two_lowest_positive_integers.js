/* 
Question 

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. 
*/


//  My solution 

// an array => 4 positive integers,whole numbers greater than 0,no floats , no negative integers

// return the sum of the 2 lowest numbers in the array

// if an array is [19, 5, 42, 2, 77] than sum should be 7
// if an array is [5, 8, 12, 19, 22] than sum should be 13
// if an array is [23, 71, 33, 82, 1] than sum should be 24


// Make a function that takes an array of positive integers
function sumTwoSmallestNumbers(numbers) {
  // sort the array from smallest to largest
  let sortedNumbers = numbers.sort((a, b) => a - b);

  //  capture the two smallest numbers from array
  let firstLowestNumber = sortedNumbers[0];
  let secondLowestNumber = sortedNumbers[1];

  // return their sum
  return firstLowestNumber + secondLowestNumber;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]), "7");
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "13");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "24");
