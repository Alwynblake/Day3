"use strict";
console.log('checking user userName before prompt', userName);
var userName = prompt('What is your name?');
alert('Thanks for visiting my site ' + userName);
console.log('checking userName after prompt', userName);

alert('Please respond to the following questions with Y/y/yes/YES or no...');


function questionOne() {
    var likeDogs = prompt('Do I like dogs?').toUpperCase();
console.log ('checking userName: ', userName);
    if (likeDogs === 'Y' || likeDogs === 'YES') {
        alert('Congrats! ' + userName + ', you know me extremely well.')
        } else {
        alert('Sorry, ' + userName + ' you were wrong.');
}

}
function questionTwo() {
    var likeLearning = prompt('Do I like to learn?').toUpperCase();
console.log ('Do I like learning?', likeLearning);
if (likeLearning === 'Y' || likeLearning === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')

}

}
function questionThree() {
    var likeMovies = prompt('Do I like movies?').toUpperCase();
    console.log ('Do I like movies?', likeMovies);  
if (likeMovies === 'Y' || likeMovies === 'YES') {
   alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
   alert('Sorry, ' + userName + ' you were wrong.')

}   

}
function questionFour() {
    var likeFood = prompt('Do I like to eat good food?').toUpperCase();
    console.log ('Do I like food?', likeFood);  
if (likeFood === 'Y' || likeFood === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')
}
}
function questionFive() {
    var likeIcecream = prompt('Do I like to ice cream?').toUpperCase();
    console.log ('Do I like ice cream?', likeIcecream);  
if (likeIcecream === 'Y' || likeIcecream=== 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')
}
}
function questionSix() {
    var favNumber = 32
var counter = 0;
var numberGuess = parseInt(prompt('guess my favorite number. you have four chances!'));

while (numberGuess !== favNumber && counter < 3) {
  console.log(counter);
  counter++;

  if (numberGuess < favNumber) {

    numberGuess = parseInt(prompt('Your guess was too low. Try again'))
  } else if (numberGuess > favNumber) {
    numberGuess = parseInt(prompt('Your guess was too high. Try again.'));
  }
}
if (numberGuess === favNumber) { 
  alert('Correct!'); 
} else {
  alert('The number is ' + favNumber);
}
}
function questionSeven() {
    //create an array
var guessPlaces = prompt('Can you guess a state that I have lived in besides Washington?');
var placesLived = ['New York', 'Dallas', 'Massachusetts']
var sixGuesses = 0;
console.log(placesLived);

while (guessPlaces !== placesLived && sixGuesses < 5) {
  console.log(sixGuesses);
  sixGuesses++;


}
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();