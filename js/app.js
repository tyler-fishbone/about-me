'use strict';

//get and store user's name
var userName = prompt("Hi there, welcome to my About Me page! What's your name?")

// log the user's name
console.log("User's name: " + userName)

//say hello to user with their name
alert("Hi there " + userName + ". Pleased to meet you. Time for your quiz about me!")


//ask question and store answer in var
var answerOne = prompt("Does Tyler speak some Hebrew? \nRespond Yes or No.").toUpperCase();

//print answer to console
console.log("Response to question 1: " + answerOne);

//after each question check answer
//then notify user if they are correct or incorrect
if (answerOne === "YES"){
    alert("You're right! He lived in Israel for a while and got super nerdy on it.");
} else if (answerOne === "NO"){
    alert("Actually he does!");
} else {
    alert("Answer must be either Yes or No.");
}


// *** repeat 5 times ***

