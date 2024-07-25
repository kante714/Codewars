// QUESTION //
/* 

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/

// MY SOLUTION //

//PARAMETER: an array => integers,size is at least 1, could be mixture positive, negative or zeroes 

//RESULT: return the maximum product obtained from multiplying 2 adjacent numbers in the array

//EXAMPLES: (Input => Output)
// [1, 2, 3] =>  6
// [9, 5, 10, 2, 24, -1, -48] => 50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921]  => -14

//PSEUDOCODE: function that take in an array of integers, declare newArr variable with empty array, loop through and push the product of multiplying 2 adjacent numbers in the array to newArr, than return the maximum product from it.

function adjacentElementsProduct(array) {
    let newArr = []
    for(let i = 0; i < array.length - 1; i++){
        newArr.push(array[i] * array[i + 1])
    }
    return Math.max(...newArr)
}
//NOTE: can be done using Math.max + map method + slice method as well
// function adjacentElementsProduct(a) {
//   return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
// }


console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), "0");
console.log(adjacentElementsProduct([1, 2, 3, 0]), "6");
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), "50");
console.log(adjacentElementsProduct([1, 5, 10, 9]), "90");
