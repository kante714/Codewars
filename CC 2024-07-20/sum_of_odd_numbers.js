/* Question

Given the triangle of consecutive odd numbers:

//              1                      = 1
//           3     5                   = 8
//        7     9    11                = 27
//    13    15    17    19             = 64
// 21    23    25    27    29          = 125
// ...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/ 



// My solution //

// a triangle of consecutive odd numbers => n rows, n starts at 1, input is the row number

// return sum of the numbers in row n 

// 1 -->  1
// 2 --> 3 + 5 = 8
// 42 --> 74088

// Create a function that take in row number
function rowSumOddNumbers(n) {
    // sum of numbers in row n => n power by 3
    let sumOfNumbers = Math.pow(n, 3);
    return sumOfNumbers
}

console.log(rowSumOddNumbers(1), '1');
console.log(rowSumOddNumbers(42), '74088');