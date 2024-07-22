// QUESTION //
/* 

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

// MY SOLUTION //

//PARAMETER: an array => only 3 nums , no string, no boolean, no empty 

//RESULT: returns the index of num that lies between the other two num.

//EXAMPLES: (Input ---> Output)
// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1

//PSEUDOCODE: create a function that take in an array with 3 nums, copy an array using slice method, sort copied array using sort method, capture middle number using index, than get the index of middle num from unsorted array

function gimme(triplet) {
    let tripletCopy = triplet.slice();
    let sortedTripletCopy = tripletCopy.sort((a, b) => a - b);
    let middleNum = sortedTripletCopy[1]
    let middleNumIndex = triplet.indexOf(middleNum)
    return middleNumIndex

    // short form //
    // return triplet.indexOf(triplet.slice().sort((a, b) => a - b)[1]);
}


console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([-5.2, -10.6, 14]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-2, -3, -1]), 0);