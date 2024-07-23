// QUESTION //

/* 

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

*/

// MY SOLUTION //

//PARAMETER: 2 array  => string, 1 word, no empty, same length

//RESULT: Return the score for this array of answers, +4 for correct answer, -1 for incorrect answer, 0 for blank answer

//EXAMPLES: (Input --> Output)
//  ["a", "a", "b", "b"], ["a", "c", "b", "d"] -->  6
//  ["a", "a", "c", "b"], ["a", "a", "b", ""] --> 7
//  ["a", "a", "b", "c"], ["a", "a", "b", "c"] -->  16
//  ["b", "c", "b", "a"], ["", "a", "a", "c"] --> 0

//PSEUDOCODE: create a function that take in 2 array of same length, 

function checkExam(array1, array2) {
    let score = 0
    for(let i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            score += 4
        }else if(array2[i] === ""){
            score += 0
        }else{
            score -= 1
        }
    }
    if(score < 0){
        score = 0
    }
    return score
}
//NOTE: can be solve using reduce method

 console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), "6");
 console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), "7");
 console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), "16");
 console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), "0");  