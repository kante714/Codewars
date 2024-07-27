// QUESTION //
/* 

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!

*/

// MY SOLUTION //

//PARAMETER: an array -> integers, can contain negtive numbers, can be empty, not sorted

//RESULT: returns the difference between the largest and the smallest value in a given array

//EXAMPLES: (Input -> Output)
// [1, 2, 3, 4]   ->  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  ->  returns 7 because 3 - (-4) == 7

//PSEUDOCODE: function that take in an array of integers, if length of list is 0 or 1 which means empty or has 1 element reutrn 0, else return difference between the largest and the smallest value using max and min method

function maxDiff(list) {
    if(list.length <= 1) return 0;
    else return Math.max(...list) - Math.min(...list)
};


console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
