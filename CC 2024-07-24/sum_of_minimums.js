// QUESTION //
/* 

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

*/

// MY SOLUTION //

//PARAMETER: an array => 2d, no empty,only positive values

//RESULT: return sum of the minimum values in each row

//EXAMPLES: (Input --> Output)
// [[ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ],[ 20, 21, 34, 56, 100 ]] --> 26 
// [[7, 9, 8, 6, 2],[6, 3, 5, 4, 3],[5, 8, 7, 4, 5]] --> 9
// [[11, 12, 14, 54],[67, 89, 90, 56],[7, 9, 4, 3],[9, 8, 6, 7]] --> 76

//PSEUDOCODE: function that take in 2d array, declare variable which value is 0, loop through 2d array, add all minimum values from nested array, return the sum of all minimum values

function sumOfMinimums(arr) {
    let minimumsSum = 0
    for(let i = 0; i < arr.length; i++){
        minimumsSum += Math.min(...arr[i])
    }
    return minimumsSum
}
//NOTE: this problem can be solve using reduce method as well (arr.reduce((p, c) => p + Math.min(...c), 0))

console.log(sumOfMinimums([[1, 2, 3, 4, 5],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100]]), "26");
console.log(sumOfMinimums([[7, 9, 8, 6, 2],[6, 3, 5, 4, 3],[5, 8, 7, 4, 5]]), "9");
console.log(sumOfMinimums([[11, 12, 14, 54],[67, 89, 90, 56],[7, 9, 4, 3],[9, 8, 6, 7]]), "76");
