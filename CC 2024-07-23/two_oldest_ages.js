// QUESTION //
/*

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

*/

//PARAMETER: an array => always include at least 2 items(no empty), only num, a whole num, only positive num

//RESULT: return two highest nums within the array(the two oldest/oldest ages within the array of ages passed in.)

//EXAMPLES: (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0] --> [3, 10]


//PSEUDOCODE: create a function that take in an array with at least 2 items, check if array have at least 2 items, sort array from lowest to highest than capture the last two nums using slice method

function twoOldestAges(ages){
    if(ages.length <= 0){
        return "Should have at least 2 items"
    }else{
        return ages.sort((a, b) => a - b).slice(-2);
    }
}

console.log(twoOldestAges([1, 2, 10, 8]), [8, 10]);
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
console.log(twoOldestAges([1, 3, 10, 0]), [3, 10]);
