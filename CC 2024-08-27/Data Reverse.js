// QUESTION //
/* 
Description:
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> only ones and zeros

//RETURNS: return an array after reversing the order of each segments from provided array

//EXAMPLES: (Input --> Output)
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0] --> [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
// [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1] --> [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]

//PSEUDOCODE:
// Create a function that take in an array containing only ones and zeros
// declare variable "reversedData" and set it to an empty array
// while until data length is not equal to 0 push an array of every last 8 element seperatley to "reversedData"
// return a single array after concatenating those seperated array

//SOLUTION:
function dataReverse(data) {
    let reversedData = []
    while(data.length){
        reversedData.push(data.splice(-8))
    }
    return reversedData.reduce((a, b) => a.concat(b),[])
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1),data2)
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
console.log(dataReverse(data3),data4)


//NOTE: Another way to solve this problem
// function dataReverse(data) {
//     const reversedData = [];
//     for (let i = 0; i < data.length; i += 8) {
//         reversedData.unshift(...data.slice(i, i + 8));
//     }
//     return reversedData;
// }

// const dataReverse = a => a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);