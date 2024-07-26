// QUESTION //
/* 

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

// MY SOLUTION //

//PARAMETER: number (n) => a whole num, 

//RESULT: Return an array containing the numbers from 1 to N

//EXAMPLES: (Input => Output)
// fizzbuzz(3) =>  [1, 2, "Fizz"]
// fizzbuzz(10) => [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']

//PSEUDOCODE: function that take in a whole number (n), declare an empty array named arr, loop and if i % 3 === 0 and i % 5 == 0 push 'FizzBuzz' to arr, if i % 3 === 0 push 'Fizz' to arr, if i % 5 === 0 push 'Buzz' to arr else only push i ,than return arr

function fizzbuzz(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz')
        }else if(i % 3 === 0){
            arr.push('Fizz')
        }else if(i % 5 === 0){
            arr.push('Buzz')
        }else{
            arr.push(i)
        } 
    }
    return arr
}

console.log(fizzbuzz(3),"[1, 2, 'Fizz']")
console.log(fizzbuzz(10),"[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']")
