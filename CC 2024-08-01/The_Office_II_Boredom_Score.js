// QUESTION //
/* 

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<= 80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

*/

// MY SOLUTION //

//PARAMETER: an objectb -> staff names as key and the department they work in as value (key: value)

//RESULT: return the appropriate sentiment, depending on the cumulative score of the team, <=80: 'kill me now', < 100 & > 80: 'i can handle this', 100 or over: 'party time!!'

//EXAMPLES: (Input --> Output)
// {tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' } --> 'kill me now'
// { tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen' } --> 'i can handle this'
// { tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change', katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about' } --> 'party time!!'

//PSEUDOCODE: declare variable 'boredomScore' and store each department boredom score, create function that take in an object, declare variable 'cumulativeScore' , get the cumulative score of the team than store it in 'cumulativeScore',  return the appropriate sentiment, depending on the cumulative score of the team 

const boredomScore = {
    "accounts": 1,
    "finance": 2,
    "canteen": 10,
    "regulation": 3,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "retail": 5,
    "cleaning": 4,
    "pissing about": 25,
};

function boredom(staff){
    let cumulativeScore = Object.values(staff).reduce((total, eachDepartmentScore) => total + boredomScore[eachDepartmentScore], 0) 

    if (cumulativeScore <= 80) return "kill me now";
    if (cumulativeScore >= 100) return "party time!!";
    return "i can handle this";
}

console.log(boredom({tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' }), 'kill me now');
console.log(boredom({ tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
console.log(boredom({ tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change', katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about' }), 'party time!!');
