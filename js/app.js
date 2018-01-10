'use strict';

// get and store user's name
var userName = prompt("Hi there, welcome to my About Me page! What's your name?")
// log the user's name
console.log("User's name: " + userName)
//say hello to user with their name
alert("Hi there " + userName + ". Pleased to meet you. Time for your quiz about me!")

// QUESTION 1 - Hebrew
// ask question and store answer in var
var answerOne = prompt("Does Tyler speak some Hebrew? \nRespond Yes or No.").toUpperCase();

// print answer to console
console.log("Response to question 1, speak hebrew: " + answerOne);

// check answer then notify user if they are correct or incorrect
if (answerOne === "YES"){
    alert("You're right! He lived in Israel for a while and got super nerdy on it.");
} else if (answerOne === "NO"){
    alert("Actually he does!");
} else {
    alert("Answer must be either Yes or No.");
}

// QUESTION 2 - Pets
var answerTwo = prompt("Does Tyler currently have a pet? \nRespond Yes or No").toUpperCase();
console.log("Response to question 2, own pet: " + answerTwo);
if (answerTwo === "NO"){
    alert("You're right :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve...\n... \nGet it?");
} else if(answerTwo === "YES"){
    alert("Sadly he does not :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve... get it?");
} else {
    alert("Answer must be either Yes or No.");
}

// QUESTION 3 - Life Plans
var answerThree = prompt("Does Tyler know exactly what he wants to do after this program? \nRespond Yes or No").toUpperCase();
console.log("Response to question 3, life plans: " + answerThree);
if (answerThree === "NO"){
    alert("You're right! He's in quite the state of flux right now.");
} else if(answerThree === "YES"){
    alert("He wishes.");
} else {
    alert("Answer must be either Yes or No.");
}

// QUESTION 4 - Instapot Excitement
var answerFour = prompt("Is Tyler excited that he got an Instapot for christmas? \nRespond Yes or No").toUpperCase();
console.log("Response to question 4, instapot excitement: " + answerFour);
if (answerFour === "YES"){
    alert("Damn skippy he's excited.");
} else if(answerFour === "NO"){
    alert("What do you take him for? A monster?!");
} else {
    alert("Answer must be either Yes or No.");
}

// QUESTION 5 - Space travel
var answerFive = prompt("Has Tyler already started saving to go to outer space one day? \nRespond Yes or No").toUpperCase();
console.log("Response to question 5, space travel fund: " + answerFive);
if (answerFive === "NO"){
    alert("True, but it's a new years resolution to start one.");
} else if(answerFive === "YES"){
    alert("Actually not yet, but he wants to start saving this year.");
} else {
    alert("Answer must be either Yes or No.");
}