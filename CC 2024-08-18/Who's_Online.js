// QUESTION //
/* 
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
*/


//PARAMETERS: an array of objects -> key: value pairs of different datatypes, can be empty 

//RETURNS: return object with key like online, offline and away.If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away. if you have no friends in your chat application, return an empty object {}

//EXAMPLES: (Input --> Output)
// let friends1 = [{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//     }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//     }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }]
    
// let  friends2 = [{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//     }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//     }]

// friends1 --> { offline: ['Lucy'], away: ['Bob'] }

// friends2 --> { online: ['David'], offline: ['Lucy'], away: ['Bob'] }

//PSEUDOCDE:
// Create a function that take in an array of objects
// declare variable "online" and set it to an array of friends whose status value is online
// declare variable "away" and set it to an array of friends whose status value is away
// declare variable "offline" and set it to an array of friends whose status value is offline
// return object with either online, offline, away as key and an arrray of friends name as value according to their status

//SOLUTION:
const whosOnline = (friends) => {
    const online = friends.filter(({ status, lastActivity }) => status === "online" && lastActivity <= 10).map(({ username }) => username);
    const away = friends.filter(({ status, lastActivity }) => status === "online" && lastActivity > 10).map(({ username }) => username);
    const offline = friends.filter(({ status }) => status === "offline").map(({ username }) => username);

    return {
        ...(online.length && { online }),
        ...(offline.length && { offline }),
        ...(away.length && { away }),
    };
}
let friends1 = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
    }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]
    
let  friends2 = [{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

console.log(whosOnline(friends2), { offline: ['Lucy'], away: ['Bob']})

console.log(whosOnline(friends1), { online: ['David'], offline: ['Lucy'], away: ['Bob']})
  

//NOTE: Another way to solve this problem
// const whosOnline = (friends) => {
//   let output = {};
//   friends.forEach((e) => {
//     let status = e.status;
//     if (status === "online" && e.lastActivity > 10) status = "away";
//     let temp = output[status];
//     if (output[status]) {
//       output[status].push(e.username);
//     } else {
//       output[status] = [e.username];
//     }
//   });
//   return output;
// };

// const whosOnline = (friends) =>
//   friends.reduce((activities, { username, status, lastActivity }) => {
//     const realStatus =
//       status === "online" && lastActivity > 10 ? "away" : status;
//     return {
//       ...activities,
//       [realStatus]: activities[realStatus]
//         ? [...activities.realStatus, username]
//         : [username],
//     };
//   }, {});

// const whosOnline = (friends) =>
//   friends.reduce((a, { username, status, lastActivity }) => {
//     const fStatus = status === "online" && lastActivity > 10 ? "away" : status;
//     a[fStatus] ? a[fStatus].push(username) : (a[fStatus] = [username]);
//     return a;
//   }, {});