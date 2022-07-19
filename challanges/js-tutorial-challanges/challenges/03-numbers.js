/*

## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

*/

const score1 = 100;
const score2 = 3;
const score3 = 40;

const totle_score = score1 + score2 + score3;
const avr_score = totle_score / 3;

console.log(score1);
console.log(score2);
console.log(score3);
console.log(totle_score);
console.log(avr_score);

const plates = 20;
const people = 7;
let remaining = plates % people;
remaining++;
const message = "There are " + remaining + " plates available";
console.log(message);
