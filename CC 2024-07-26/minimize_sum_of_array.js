// QUESTION //
/* 

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/

// MY SOLUTION //

//PARAMETER: an array => integers, only positive, always even size

//RESULT: return minimum sum which is obtained from summing each Two integers product 

//EXAMPLES: (Input => Output)
// minSum([5,4,2,3]) =>  22
// minSum([12,6,10,26,3,24]) => 342
// minSum([9,2,8,7,5,4,0,6]) => 74

//PSEUDOCODE:function that take in an array of integers with only positive nums and even size, sort arr in ascending using sort method and capture the minimum sum of two integers product using reduce method

function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((total, currentValue) => total + currentValue * arr.pop(), 0)
}

console.log(minSum([5, 4, 2, 3]), "22");
console.log(minSum([12, 6, 10, 26, 3, 24]), "342");
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), "74");