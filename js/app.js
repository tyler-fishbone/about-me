'use strict';

// // get and store user's name
// var userName = prompt("Hi there, welcome to my About Me page! What's your name?")

// // log the user's name
// console.log("User's name: " + userName)

// //say hello to user with their name
// alert("Hi there " + userName + ". Pleased to meet you. Time for your quiz about me!")


// // QUESTION 1
// // ask question and store answer in var
// var answerOne = prompt("Does Tyler speak some Hebrew? \nRespond Yes or No.").toUpperCase();

// // print answer to console
// console.log("Response to question 1, speak hebrew: " + answerOne);

// // check answer then notify user if they are correct or incorrect
// if (answerOne === "YES"){
//     alert("You're right! He lived in Israel for a while and got super nerdy on it.");
// } else if (answerOne === "NO"){
//     alert("Actually he does!");
// } else {
//     alert("Answer must be either Yes or No.");
// }

//QUESTION 2
var answerTwo = prompt("Does Tyler currently have a pet? \nRespond Yes or No").toUpperCase();
console.log("Response to question 2, own pet: " + answerTwo);
if (answerTwo === "NO"){
    alert("You're right :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve... get it?");
} else if(answerTwo === "YES"){
    alert("Sadly he does not :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve... get it?");
} else {
    alert("Answer must be either Yes or No.");
}
