// QUESTION //
/* 
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5

Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

Here's how I expect the functions to be called in your language:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]

Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests
*/


//PARAMETERS: an array -> no empty

//RETURNS: return function converted from Haskell function to JavaScript function

//EXAMPLES: (Input --> Output)
// head([5, 1]) --> 5
// tail([1]) --> []
// init([1, 5, 7, 9]) --> [1, 5, 7]
// last([7, 2]) --> 2

//PSEUDOCODE:
// create a function 'head' that take in an array and return only the first elements in an arry
// create a function 'tail' that take in an array and return all the elements except the first element in an array
// create a function 'init' that take in an array and return all the elements except the last element in an array
// create a function 'last' that take in an array and return only the last elements in an array 

//SOLUTION:
function head(array){
    return array[0]
}
function tail(array){
    return array.slice(1)
}
function init(array){
    return array.slice(0, array.length - 1)
}
function last(array){
    return array[array.length - 1]
}

console.log(head([5, 1]), 5);
console.log(tail([1]), []);
console.log(init([1, 5, 7, 9]), [1, 5, 7]);
console.log(last([7, 2]), 2);