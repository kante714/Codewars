// QUESTION //
/*

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/

// MY SOLUTION //

//PARAMETER: an array => positive, only nums, no empty

//RESULT: return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

//EXAMPLES: (Input --> Output)
// [13, 27, 49]  -->   (62, 27)
// [50, 60, 70, 80]  -->   (120, 140)
// [80]  -->  (80, 0)

//PSEUDOCODE: function that take in an array of positive integers, declare 2 empty array named even and odd, loop through the array which was given in argument and check if array index is even or odd using remainder operator, if index is even than push array element to an array called even else push array element to an array called odd than return an array with 2 element in which 1st element is sum of even and 2nd element is sum of odd.

function rowWeights(array) {
    let even = []
    let odd = []
    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }
    }
    let totalWeightOfTeam1 = even.reduce((sum, num) => sum + num, 0);
    let totalWeightOfTeam2 = odd.reduce((sum, num) => sum + num, 0);
    return [totalWeightOfTeam1, totalWeightOfTeam2]
}
//NOTE: OPTIMAL SOLUTION CAN BE CODED USING FILTER METHOD WITH REDUCE METHOD 
// function rowWeights(array) {
//     let totalWeightOfTeam1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
//     let totalWeightOfTeam2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);
//     return [totalWeightOfTeam1, totalWeightOfTeam2]
// }


console.log(rowWeights([80]), "[80, 0]");
console.log(rowWeights([100, 50]), "[100, 50]");
console.log(rowWeights([50, 60, 70, 80]), "[120, 140]");
console.log(rowWeights([13, 27, 49]), "[62, 27]");
console.log(rowWeights([70, 58, 75, 34, 91]), "[236, 92]");
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), "[211, 164]");
console.log(rowWeights([0]), "[0, 0]");
console.log(rowWeights([100, 51, 50, 100]), "[150, 151]");
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), "[207, 235]");
console.log(rowWeights([0, 1, 0]), "[0, 1]");

