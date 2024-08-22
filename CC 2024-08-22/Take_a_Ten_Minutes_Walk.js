// QUESTION //
/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!)."
*/


//PARAMETERS: an array -> one-letter strings, no empty

//RETURNS: return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//EXAMPLES: (Input --> Output)
// ['n','s','n','s','n','s','n','s','n','s'] --> true
// ['w','e','w','e','w','e','w','e','w','e','w','e'] --> false
// ['w'] --> false
// ['n','n','n','s','n','s','n','s','n','s'] --> false

//PSEUDOCODE:
// Create a function that take in an array of strings
// if provided array "walk" length is not equal to 10 return false 
// loop over "walk" 
// return true if length of array with only letter 'n' equal to length of array with only letter 's' and if length of array with only letter 'e' equal to length of array with only letter 'w'
// return false if any of aboves condition doesn't match

//SOLUTION:
function isValidWalk(walk) {
    if(walk.length !== 10){
        return false; 
    }else if((walk.filter(dir => dir === 'n').length === walk.filter(dir => dir === 's').length) && (walk.filter(dir => dir === 'e').length === walk.filter(dir => dir === 'w').length)){
        return true;
    }else{
        return false; 
    }
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
console.log(isValidWalk(['w']), false);
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);

//NOTE: Other way to solve this problem
// function isValidWalk(walk) {
//   let dx = 0
//   let dy = 0
//   let dt = walk.length
  
//   for (let i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }

// function isValidWalk(walk) {
//   const north = walk.filter((item) => item === "n").length;
//   const south = walk.filter((item) => item === "s").length;
//   const east = walk.filter((item) => item === "e").length;
//   const west = walk.filter((item) => item === "w").length;

//   return walk.length === 10 && north === south && east === west;
// }

// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function (a) {
//       return a == val;
//     }).length;
//   }
//   return (
//     walk.length == 10 && count("n") == count("s") && count("w") == count("e")
//   );
// }

// function isValidWalk(walk) {
//   let res = { n: 0, w: 0, s: 0, e: 0 };
//   walk.forEach((c) => res[c]++);
//   return walk.length === 10 && res.n == res.s && res.e == res.w;
// }