// QUESTION //
/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'
*/


//PARAMETERS: an 2d array (x), number of bags (bags), capactity of a bag (cap)

//RETURNS: return 'Clean' if you have enough capacity to collect all the dog cr@p and make your garden clean again else return 'Cr@p', if your dog is out there ('D') return 'Dog!!'.

//EXAMPLES: (Input --> Output)
// ([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) --> "Clean"
// ([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) --> "Cr@p"
// ([['_','_'], ['_','@'], ['D','_']], 2, 2) --> "Dog!!"

//PSEUDOCODE:
// create a function that take in 3 arguments an 2d array, number of bags and capacity of a bag 
// declare variable 'garden' 
// take given 2d array and convert it into 1d array than store it in variable 'garden'
// declare variabe 'totalCapacity' and set it to number of bags * capactity of a bag
// declare variable 'totalCrap' and set it to array length which have '@' in it 
// check if 'garden' includes 'D' if so return "Dog!!"
// return "Cr@p" if 'totalCrap' > 'totalCapacity' else return "Clean"


//SOLUTION:
function crap(x, bags, cap) {
    const garden = x.reduce((a, b) => a.concat(b));
    const totalCapacity = bags * cap;
    const totalCrap = garden.filter(element => element === '@').length;

    if (garden.includes("D")) return "Dog!!";
    else return totalCrap > totalCapacity ? "Cr@p" : "Clean";
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");

//NOTE: Another way to solve this problem
// function crap(x, bags, cap) {
//   var yard = x.reduce((a, b) => a.concat(b));
//   return yard.includes("D")
//     ? "Dog!!"
//     : bags * cap - yard.filter((val) => val === "@").length > 0
//     ? "Clean"
//     : "Cr@p";
// }