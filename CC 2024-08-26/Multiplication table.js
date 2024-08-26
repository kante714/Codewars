// QUESTION //
/* 
Description:
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

//////////////////////////////////////////////////////////////////////////

//PARAMETERS: a number -> integer

//RETURNS: return multiplication table of size provided in parameter (size)

//EXAMPLES: (Input --> Output)
// 3 --> [[1,2,3], [2,4,6], [3,6,9]]


//PSEUDOCODE:
// declare the variable "multiTable" with an empty array, wich will contain the last result.
// used a for loop to iterate the array, and for every iteration I did a "x" variable with an empty array 
// another for loop, inside of above loop I will iterate through the size value, and in every iteration I will push to x the result of the multiplication of i by j, that way for example if I'm in the first value of the array in the first for loop, I will always be equal to 1 in the second loop, but j will be changing in every iteration, so I can get [1*1,1*2,1*3] in the x array
// at the end return "multiTable"

//SOLUTION:
multiplicationTable = function (size) {
    let multiTable = [];
    for (let i = 1; i <= size; i++) {
        let x = [];
        for (let j = 1; j <= size; j++) {
           x.push(i * j);
        }
        multiTable.push(x);
    }
    return multiTable;
};

console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);

//NOTE: Other way to solve this problem
// const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)))
