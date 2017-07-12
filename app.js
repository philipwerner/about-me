'use strict';
var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' +username);
var correctAnswer = 0;

var yoyoTricks = prompt('Can I do any sweet Yo-Yo tricks?').toUpperCase();
if (yoyoTricks === 'N' || yoyoTricks ==='NO') {
  alert('That is correct, but I wish I could do sweet tricks');
} else if (yoyoTricks === 'Y' || yoyoTricks === 'YES') {
  alert('I am sorry but I am unable to do sweet tricks.');
} else {
  alert('Please answer Y or N. Please refresh page to try again');
}
console.log('The user answered ' +yoyoTricks + ' to me being able to do sweet tricks.');

if (yoyoTricks === 'N' || yoyoTricks ==='NO') {
  correctAnswer ++;
}

var stepMother = prompt('Do I have an evil Step Mother?').toUpperCase();
if (stepMother === 'N' || stepMother === 'NO') {
  alert('That is corect! I only have an awesome mother!');
} else if (stepMother === 'Y' || stepMother === 'YES') {
  alert('Actually my mother is a sweetheart....');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + stepMother + ' to me having a evil stepmother');

if (stepMother === 'N' || stepMother === 'NO') {
  correctAnswer ++;
}

var drinkWater = prompt('Should I be drinking more water?').toUpperCase();
if (drinkWater === 'Y' || drinkWater === 'YES') {
  alert('You are right, I really should drink more water.');
} else if (drinkWater === 'N' || drinkWater === 'NO') {
  alert('I like the way you think! Beer and whiskey are so much better!.');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + drinkWater + ' to me drinking more water');

if (drinkWater === 'Y' || drinkWater === 'YES') {
  correctAnswer ++;
}

var harryPotter = prompt('Am I just a little to obsessed with the Harry Potter series?').toUpperCase();
if (harryPotter === 'N' || harryPotter === 'NO') {
  alert('Yeah, I was joking about getting that deathly hallows tattoo.....');
} else if (harryPotter === 'Y' || harryPotter === 'YES') {
  alert('We should get deathly hallows tattoos together!');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + harryPotter + ' to a Harry Potter obsession.');

if (harryPotter === 'Y' || harryPotter === 'YES') {
  correctAnswer ++;
}

var fireFly = prompt('Do I think the FireFly tv series is as good of a show as people say?').toUpperCase();
if (fireFly === 'Y' || fireFly === 'YES') {
  alert('It is a pretty freaking awesome show ' + username + ' and I wish they would bring it back.');
} else if (fireFly === 'N' || fireFly === 'NO') {
  alert(username + ' you are wrong, so so wrong.');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + fireFly + ' to me thinking FireFly is as good as people say');

if (fireFly === 'Y' || fireFly === 'YES') {
  correctAnswer ++;
}

var favGuess = 0;

while(guessedNum != 16 && favGuess < 4) {
var guessedNum = parseInt( prompt('Let\'s see if you can guess my favorite number.It is between 1 and 20. You have four tries and I will give you hints.'));
if (guessedNum === 16) {
  alert('Great job ' + username + ' 16 is my favorite number!!');
} else if (guessedNum < 16) {
  alert('Sorry ' + username + ' try again, it is higher than that.');
} else {
  alert('Sorry ' + username + ' try again, it is lower than that.');
}
favGuess++;
}

if (guessedNum === 16) {
  correctAnswer ++;
}

if (guessedNum != 16){
  alert('Sorry about your luck ' + username + ', my favorite number is 16.');
}

var myStates = ['Indiana', 'North Carolina', 'Arizona', 'California', 'Georgia'];
var stateGuess = 0;

while(guessedState != myStates && stateGuess < 6) {
var guessedState = prompt(username + ' can you guess another state I have lived in besides Washington? You will have 6 tries.');
if (guessedState === myStates) {
  alert('Great job ' + username + ', Indiana, Arizona, North Carolina, California and Georgia are all the other states I have lived in!');
} else {
  alert('I have never lived there. Maybe someday, but not right now.');
}
stateGuess++;
}
alert(username + ' you correctly answered ' + correctAnswer + ' out of 7 questions correctly!!');
