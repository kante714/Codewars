// QUESTION //
/* 
Create a function that takes two arguments:

An array of objects which feature the season, the team and the country of the Champions League winner.

Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

For example if the input array is as follows:


countWins(winnerList1, 'Spain') => should return 2
countWins(winnerList1, 'Portugal') => should return 1
countWins(winnerList1, 'Sportland') => should return 0
*/


//PARAMETERS: an array of objects -> can be of any datatypes ? a string -> name of country

//RETURNS: return the number which represents the number of times a team from a given country has won a champion league. Return 0 if there have been no wins.

//EXAMPLES: (Input --> Output)
// const winnerList1 = [
//   { season: "1996–97", team: "Borussia Dortmund", country: "Germany" },
//   { season: "1997–98", team: "Real Madrid", country: "Spain" },
//   { season: "1998–99", team: "Manchester United", country: "England" },
//   { season: "1999–00", team: "Real Madrid", country: "Spain" },
//   { season: "2000–01", team: "Bayern Munich", country: "Germany" },
//   { season: "2001–02", team: "Real Madrid", country: "Spain" },
//   { season: "2002–03", team: "Milan", country: "Italy" },
//   { season: "2003–04", team: "Porto", country: "Portugal" },
//   { season: "2004–05", team: "Liverpool", country: "England" },
//   { season: "2005–06", team: "Barcelona", country: "Spain" },
//   { season: "2006–07", team: "Milan", country: "Italy" },
//   { season: "2007–08", team: "Manchester United", country: "England" },
//   { season: "2008–09", team: "Barcelona", country: "Spain" },
//   { season: "2009–10", team: "Internazionale", country: "Italy" },
//   { season: "2010–11", team: "Barcelona", country: "Spain" },
//   { season: "2011–12", team: "Chelsea", country: "England" },
//   { season: "2012–13", team: "Bayern", country: "Germany" },
//   { season: "2013–14", team: "Real Madrid", country: "Spain" },
//   { season: "2014–15", team: "Barcelona", country: "Spain" },
//   { season: "2015–16", team: "Real Madrid", country: "Spain" },
// ];

// winnerList1, 'Spain' --> 2
// winnerList1, 'Portugal' --> 1
// winnerList1, 'Sportland' --> 0

//PSEUDOCODE:
// Create a function that take in 2 arguments an array of objects and a string with country name
// iterate over given array "winnerList" and count how many numbers of times a team from a given "country" has won, Return 0 if there have been no wins.

//SOLUTION:
function countWins(winnerList, country) {
    return winnerList.reduce((count, team) => team.country === country ? count + 1 : count, 0)
}

const winnerList1 = [
    { season: "1996–97", team: "Borussia Dortmund", country: "Germany" },
    { season: "1997–98", team: "Real Madrid", country: "Spain" },
    { season: "1998–99", team: "Manchester United", country: "England" },
    { season: "1999–00", team: "Real Madrid", country: "Spain" },
    { season: "2000–01", team: "Bayern Munich", country: "Germany" },
    { season: "2001–02", team: "Real Madrid", country: "Spain" },
    { season: "2002–03", team: "Milan", country: "Italy" },
    { season: "2003–04", team: "Porto", country: "Portugal" },
    { season: "2004–05", team: "Liverpool", country: "England" },
    { season: "2005–06", team: "Barcelona", country: "Spain" },
    { season: "2006–07", team: "Milan", country: "Italy" },
    { season: "2007–08", team: "Manchester United", country: "England" },
    { season: "2008–09", team: "Barcelona", country: "Spain" },
    { season: "2009–10", team: "Internazionale", country: "Italy" },
    { season: "2010–11", team: "Barcelona", country: "Spain" },
    { season: "2011–12", team: "Chelsea", country: "England" },
    { season: "2012–13", team: "Bayern", country: "Germany" },
    { season: "2013–14", team: "Real Madrid", country: "Spain" },
    { season: "2014–15", team: "Barcelona", country: "Spain" },
    { season: "2015–16", team: "Real Madrid", country: "Spain" },
];  

console.log(countWins(winnerList1, "Portugal"), 1);
console.log(countWins(winnerList1, "FootLand"), 0);
console.log(countWins(winnerList1, "Spain"), 9);

//NOTE: Another way to solve this problem
// function countWins(winnerList, country) {
//   return winnerList.filter((item) => item.country === country).length;
// }