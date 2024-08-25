// QUESTION //
/* 
Description:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

///////////////////////////////////////////////////////////////////

//PARAMETERS: an array -> positive integers / a number -> positive integer

//RETURNS: return an integer, the total time required for all the customers to check out!

//EXAMPLES: (Input --> Output)
// [], 1 --> 0
// [1, 2, 3, 4], 1 --> 10
// [2, 2, 3, 3, 4, 4], 2 --> 9
// [1, 2, 3, 4, 5], 100 --> 5
// [5, 3, 4], 1 --> 12
// [10, 2, 3, 3], 2 --> 10
// [2, 3, 10, 2], 2 --> 12

//PSEUDOCODE:
// Create a function that take in 2 arguments an array and a number of positive integers
// declare an array of n 'registers' and sets their values to 0
// loops through the customer's array of positive integers, 'waitTime', sorts by Math.min,
// and cues those integers to n of 'registers', the available number of registers
// then sums the amount of waitTime on each available register
// then returns the register with the longest waitTime

//SOLUTION:
function queueTime(customers, n) {
    let registers = new Array(n).fill(0);
  
    for (let waitTime of customers) {
        let minWaitTime = registers.indexOf(Math.min(...registers));
        registers[minWaitTime] += waitTime;
    }
    return Math.max(...registers);
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([5, 3, 4], 1), 12);
console.log(queueTime([10, 2, 3, 3], 2), 10);
console.log(queueTime([2, 3, 10, 2], 2), 12);