// QUESTION //
/* 
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.
*/


//PARAMETERS: an array -> integers, can be both positive and negative

//RETURNS: return an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.If you are given an array with multiple answers, return the lowest correct index.

//EXAMPLES: (Input --> Output)

//PSEUDOCODE:
// Create a funciton that take in an array of integers
// iterate over provided arr and find an index where the sum of the integers to the left of that index is equal to the sum of the integers to the right of that index
// return that index 

//SOLUTION:
function findEvenIndex(arr) {
    return arr.findIndex(
      (item, index) =>
        arr.slice(0, index).reduce((sum, num) => sum + num, 0) ===
        arr.slice(index + 1).reduce((sum, num) => sum + num, 0)
    );
}

console.log(findEvenIndex([1,2,3,4,3,2,1]),3);
console.log(findEvenIndex([1,100,50,-51,1,1]),1);
console.log(findEvenIndex([1,2,3,4,5,6]),-1);
console.log(findEvenIndex([20,10,30,10,10,15,35]),3);


//NOTE: Other way to solve this problem
// function findEvenIndex(arr){
//   const sum = arr => arr.reduce((acc,cur)=> (acc+cur) ,0)
//   return arr.findIndex((val,idx) => sum(arr.slice(0,idx)) === sum(arr.slice(idx+1)))
// }

// function findEvenIndex(arr)
// {
//   let left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(let i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];
      
//       if(left == right) return i;
//   }
  
//   return -1;
// }