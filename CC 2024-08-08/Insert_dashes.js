// QUESTION //
/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*/


//PARAMETERS: a number -> only positive, no string 

//RETURNS: return num after inserting dashes ('-') between each two odd digits

//EXAMPLES: (Input --> Output)
// (454793) --> "4547-9-3"
// (123456) --> "123456"
// (1003567) --> "1003-567"

//PSEUDOCODE:
// create a function that take in only positive number
// declare variable 'output' and set it to ''
// declare variable 'numStr' and set it to num.toString()
// loop over 'numStr' and declare variables 'currentNum' and 'nextNum' and store looped num inside them
// check if both 'currentNum' and 'nextNum' are odd or not 
// if odd insert dashes ('-') between both nums else return only both nums and add them to 'output'
// if dash is last element return output after removing that dash else return output without any change  

//SOLUTION:
function insertDash(num) {
    let output = ''
    let numStr = num.toString()

    for(let i = 0; i < numStr.length; i++){
        const currentNum = numStr[i]
        const nextNum = numStr[i + 1]

        if(currentNum % 2 !== 0 && nextNum % 2 !== 0){
            output += currentNum + '-'
        }else{
            output += currentNum
        }
    }
    return output[output.length - 1] === '-' ? output.slice(0,-1) : output 
}


console.log(insertDash(454793), "4547-9-3");
console.log(insertDash(123456), "123456");
console.log(insertDash(1003567), "1003-567");

//NOTE: Another way to solve this problems
// function insertDash(num) {
//   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
// }

// function insertDash(num) {
//   //code me
//   num = num.toString().split("");

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 > 0 && num[i + 1] % 2 > 0) {
//       num[i] = num[i] + "-";
//     }
//   }

//   return num.join("");
// }