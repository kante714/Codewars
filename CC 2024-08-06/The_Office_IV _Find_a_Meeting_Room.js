// QUESTION //
/* 
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/


//PARAMETERS: an array -> with items 'X' and 'O' only ('X' means busy and 'O' means empty)

//RETURNS: the index of the first empty meeting room

//EXAMPLES: (Input --> Output)
// ["X", "O", "X"] --> 1
// ["O", "X", "X", "X", "X"] --> 0
// ["X", "X", "X", "X", "X"] --> "None available!"

//PSEUDOCODE:
// create a function that take in an array which includes elements like 'X' and 'O'
// declare variable 'indexOfEmptyRoom' and set it to index of first empty room found('O'), if not found return -1
// return "None available!" if there is no empty rooms (-1) else return variable 'indexOfEmptyRoom'

//SOLUTION:

function meeting(x) {
    let indexOfEmptyRoom = x.findIndex(room => room === 'O')
    return indexOfEmptyRoom === -1 ? "None available!" : indexOfEmptyRoom;
}

console.log(meeting(["X", "O", "X"]), 1);
console.log(meeting(["O", "X", "X", "X", "X"]), 0);
console.log(meeting(["X", "X", "X", "X", "X"]), "None available!");

//NOTE: Another way to solve this problem
// function meeting(x) {
//   let indexOfEmptyRoom = x.indexOf("O");
//   return indexOfEmptyRoom === -1 ? "None available!" : indexOfEmptyRoom;
// }

// const meeting = (x) => (!x.includes(`O`) ? `None available!` : x.indexOf(`O`));