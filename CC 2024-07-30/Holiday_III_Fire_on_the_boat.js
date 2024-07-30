// QUESTION //
/* 
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/


//PARAMETERS: a string -> no nums, no empty

//RETURNS: return a string after changing any instance of "Fire" into "~~"

//EXAMPLES: (Input --> Output)
// "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"  -->  "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
// "Mast Deck Engine Water Fire"  -->  "Mast Deck Engine Water ~~"
// "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"  -->  "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"

//PSEUDOCODE:
// Create a function that take in a string 
// take that string and split it in array of string
// loop over an array than capture element which equal to 'Fire' 
// if equal to 'Fire' convert it into '~~' than join all strings
// return a new string with '~~' instead of 'Fire'

//SOLUTION:
function fireFight(s) {
    return s.split(' ').map(string => string === 'Fire' ? string = '~~' : string).join(' ')
}


console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");

//NOTE: Another simple way to solve it
// function fireFight(s) {
//   return s.replaceAll("Fire", "~~");
// }

// const fireFight = (s) => s.replace(/Fire/g, `~~`);

// function fireFight(s) {
//   while (s.includes("Fire")) {
//     s = s.replace("Fire", "~~");
//   }
//   return s;
// }