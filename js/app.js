'use strict';

//Establish Question Counter for correct answers
var numCorrect = 0;

// get and store user's name
var userName = prompt("Hi there, welcome to my About Me page! What's your name?");
// log the user's name
console.log("User's name: " + userName)
//say hello to user with their name
alert("Hi there " + userName + ". Pleased to meet you. Time for your quiz about me!");

// QUESTION 1 - Hebrew
// ask question and store answer in var
var answerOne = prompt("Does Tyler speak some Hebrew? \nRespond Yes or No.").toUpperCase();
// print answer to console
console.log("Response to question 1, speak hebrew: " + answerOne);
// check answer then notify user if they are correct or incorrect
if (answerOne === "YES"){
    numCorrect++;
    alert("You're right! He lived in Israel for a while and got super nerdy on it.");
} else if (answerOne === "NO"){
    alert("Actually he does!");
} else {
    alert("Answer must be either Yes or No.");
}
// *correct answer counter will increase or remain the same
console.log('Current numCorrect: ' + numCorrect);


// QUESTION 2 - Pets
var answerTwo = prompt("Does Tyler currently have a pet? \nRespond Yes or No").toUpperCase();
console.log("Response to question 2, own pet: " + answerTwo);
if (answerTwo === "NO"){
    numCorrect++;
    alert("You're right :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve...\n... \nGet it?");
} else if(answerTwo === "YES"){
    alert("Sadly he does not :( \nBut him and his girlfriend are going to get a cat soon and name it Peeve... get it?");
} else {
    alert("Answer must be either Yes or No.");
}
console.log('Current numCorrect: ' + numCorrect);


// QUESTION 3 - Life Plans
var answerThree = prompt("Does Tyler know exactly what he wants to do after this program? \nRespond Yes or No").toUpperCase();
console.log("Response to question 3, life plans: " + answerThree);
if (answerThree === "NO"){
    numCorrect++;
    alert("You're right! He's in quite the state of flux right now.");
} else if(answerThree === "YES"){
    alert("He wishes.");
} else {
    alert("Answer must be either Yes or No.");
}
console.log('Current numCorrect: ' + numCorrect);


// QUESTION 4 - Instapot Excitement
var answerFour = prompt("Is Tyler excited that he got an Instapot for christmas? \nRespond Yes or No").toUpperCase();
console.log("Response to question 4, instapot excitement: " + answerFour);
if (answerFour === "YES"){
    numCorrect++;
    alert("Damn skippy he's excited.");
} else if(answerFour === "NO"){
    alert("What do you take him for? A monster?!");
} else {
    alert("Answer must be either Yes or No.");
}
console.log('Current numCorrect: ' + numCorrect);


// QUESTION 5 - Space travel
var answerFive = prompt("Has Tyler already started saving to go to outer space one day? \nRespond Yes or No").toUpperCase();
console.log("Response to question 5, space travel fund: " + answerFive);
if (answerFive === "NO"){
    numCorrect++;
    alert("True, but it's a new years resolution to start one.");
} else if(answerFive === "YES"){
    alert("Actually not yet, but he wants to start saving this year.");
} else {
    alert("Answer must be either Yes or No.");
}
console.log('Current numCorrect: ' + numCorrect);

// QUESTION 6 - How many siblings do i have?
var numSiblings = 1;
for (var i = 0; i < 4 ; i++){
    var guessSiblings = parseInt(prompt('Guess how many siblings I have. \nAnswer must be an integer.'));
    console.log('User guessed siblings: ' + guessSiblings) 
    if(guessSiblings === numSiblings){
        alert('You got it! I have 1 sister named Liza.');
        numCorrect++;
        break;
    } else if (guessSiblings > numSiblings){
        alert('Too high. You have ' + (3-i) + ' guess(es) left.')
    } else {
        alert('Too low. You have ' + (3-i) + ' guess(es) left.')
    }
}
console.log('Current numCorrect: ' + numCorrect);

// QUESTION 7 - Countries I visited in Asia
var countriesVisited = ['japan', 'thailand', 'china', 'hong kong', 'indonesia'];
var numGuesses = 6
var flag = false;
for (var i = 0; i < numGuesses; i++){
    var countryGuess = prompt('I visited Asia last year, can you guess one of the countries I went to?').toLowerCase();
    console.log('User guessed country: ' + countryGuess);
    for(var j = 0; j < countriesVisited.length; j++){
        if(countryGuess === countriesVisited[j]){
            alert('You got it! I visited ' + countryGuess + ' last year.');
            numCorrect++;
            flag = true;
            break;
        }
    }
    if (flag){
        break;
    } else {
        alert('No sadly I did not get to visit ' + countryGuess + '. Hopefully next time though!\nYou have ' + (numGuesses - 1 - i) + ' guesses left.');
    }
}
console.log('Current numCorrect: ' + numCorrect);

// DISPLAY CORRECT ANSWERS
if(numCorrect >= 5){
    alert(userName + ', you rock! You got a ' + numCorrect + ' out of 7! Tyler is very flattered.');
} else if (numCorrect >= 2){
    alert(userName + ', not too bad! Could have been worse. You got a ' + numCorrect + ' out of 7. \nNot that much worse but still..');
} else {
    alert(userName + ', you got a ' + numCorrect + ' out of 7. I\'m going to try hard not to be offended, but honestly my cat could have done better than that.');
}
console.log('Final numCorrect: ' + numCorrect + ' / 7 possible');

