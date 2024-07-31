// QUESTION //
/* 

Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

*/

// MY SOLUTION //

//PARAMETER: an object -> team member names as keys,their happiness rating out of 10 as the value / boss -> one of the name from object

//RESULT: If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'

//EXAMPLES: (Input --> Output)
// {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura' --> 'Get Out Now!'
// {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie' --> 'Nice Work Champ!'
// {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john' --> 'Get Out Now!'

//PSEUDOCODE: function that take in 2 arguments an object and a string, get the property out from the object than assign it to a new variable, collect the total score given my team members using reduce method, get happiness rating (totalscore / number of team members),  than return "Get Out Now!" or "Nice Work Champ!" according to the happiness rating

function outed(meet, boss) {
    let teamMembers = Object.keys(meet)
    let totalScore = teamMembers.reduce((total, index) => total + meet[index], 0) + meet[boss]
    return totalScore / teamMembers.length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');