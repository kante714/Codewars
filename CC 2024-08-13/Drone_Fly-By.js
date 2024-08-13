// QUESTION //
/* 
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/


//PARAMETERS: 2 strings (lamps and drone) 

//RETURNS: return the resulting lamps string

//EXAMPLES: (Input --> Output)
// "xxxxxx", "====T" --> "ooooox"
// "xxxxxxxxx", "==T" --> "oooxxxxxx"
// "xxxxxxxxxxxxxxx", "=========T" --> "ooooooooooxxxxx"

//PSEUDOCODE:
// Create a function that take in 2 arguments both strings (lamps and drone)
// declare variable "lampsArray" and set it to a string "lamps" converted to an array
// loop until "drone" length 
// replace "lampsArray" element which has "x" with "o" until loop ends 
// return "lampsArray" after converting it into string 

//SOLUTION:
function flyBy(lamps, drone) {
    let lampArray = lamps.split("");
    for (let i = 0; i < drone.length; i++) {
        if (lampArray[i] === "x")  lampArray.splice(i, 1, "o")
    }
    return lampArray.join("");
}

console.log(flyBy("xxxxxx", "====T"), "ooooox");
console.log(flyBy("xxxxxxxxx", "==T"), "oooxxxxxx");
console.log(flyBy("xxxxxxxxxxxxxxx", "=========T"), "ooooooooooxxxxx"); 

//NOTE: Another way to solve this problem
// const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);

// function flyBy(lamps, drone) {
//   if (drone.length > lamps.length) return "o".repeat(lamps.length);
//   return lamps.replace("x".repeat(drone.length), "o".repeat(drone.length));
// }

// function flyBy(lamps, drone) {
//   return lamps
//     .split("")
//     .map((item, index, arr) => (index < drone.length ? "o" : item))
//     .join("");
// }

// const flyBy = (lamps, drone) => {
//   for (letter of drone) {
//     if (letter === "=" || letter === "T") lamps = lamps.replace("x", "o");
//   }
//   return lamps;
// };