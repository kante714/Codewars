// QUESTION //
/* 
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1

Notes
Return a positive number.
All tests will only include the words "right" and "left".
*/


//PARAMETERS: an array -> only "left" or "right", no numbers
 
//RETURNS: return an integer of how many full 360° rotations were made(Note that each word in the array counts as a 90° rotation in that direction) 

//EXAMPLES: (Input --> Output)
// ["left", "right", "left", "right"] --> 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] --> 2

// ["left", "left", "left", "left"] --> 1

//PSEUDOCODE:
// Create a function that take in an array containing only words "left" or "right"
// declare a variable "total" and set it to 0
// iterate over array "turns" and if "turns" elements are "right" than add 90 to total else subtract 90 to total
// return rounded abs value of "total" divide by 360 to find how many amount of times full 360 degree rotation happen

//SOLUTION:
function spinAround(turns) {
    let total = 0;
    turns.forEach((turn) => {
      if (turn === "right") {
        total += 90;
      }else{
        total -= 90;
      }
    });
    return Math.floor(Math.abs(total / 360));
}

console.log(spinAround(['left', 'right', 'left', 'right']), 0);
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 2);
console.log(spinAround(['left', 'left', 'left', 'left']), 1);
console.log(spinAround([]), 0);
console.log(spinAround(['left']), 0);
console.log(spinAround(['right']), 0);
console.log(spinAround(['right', 'right', 'right', 'left', 'right', 'right']), 1);
console.log(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right']), 1);
console.log(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right']), 0);
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 10);
console.log(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']), 10);

//NOTE: Another way to solve this problem
// function spinAround(turns) {
//   let t = 0;
//   for (let x of turns) {
//     t += x == "left" ? -1 : 1;
//   }
//   return Math.floor(Math.abs(t) / 4);
// }