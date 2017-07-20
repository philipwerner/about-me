'use strict';
var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' + username);
var correctAnswer = 0;

// // Questions in Array
// // Response
// var respArray = ['Correct, I cannot do any sweet yo-yo tricks. ', 'I\'m sorry, but I cannot do any yo-yo tricks. ', 'Correct, I do not have an evil stepmother. She is an amazing lady!!', 'Nah, no evil stepmother here. ', 'Yes.  Yes I should be. ', 'I wish I didn\'t, a beer and a shot of Jameson sounds good. ', 'Of course I am, aren\'t you? ', 'Wrong, House Slitherin for LYFE!! ', 'Absolutly, it is in fact as awesome as everyone thinks. ', 'GO DIE '];
//
// // Questions
// var  yoyoTricks = 'Do I know any sweet yo-yo tricks?';
// var stepMother = 'Do I have an evil stepmother?';
// var water = 'Should I be drinking more water?';
// var harryPotter = 'Am I just a little too obsessed with Harry Potter?';
// var fireFly = 'Do I think the Firefly TV series is as good as people say?';
//
// var quesArray = [yoyoTricks, stepMother, water, harryPotter, fireFly];
//
// // User Answer boolean
// var possAns = ['Y', 'YES', 'N', 'NO'];
//
// // Question 1
// var userResponse = prompt(quesArray[0]).toUpperCase();
// if (userResponse === possAns[2 || 3]){
//   alert(respArray[0]);
//   correctAnswer++;
// } else {
//   alert(respArray[1]);
// }
// // Question 2
// var userResponse = prompt(quesArray[1]).toUpperCase();
// if (userResponse === possAns[2 || 3]){
//   alert(respArray[2]);
//   correctAnswer++;
// } else {
//   alert(respArray[3]);
// }
// // Question 3
// var userResponse = prompt(quesArray[2]).toUpperCase();
// if (userResponse === possAns[0 || 1]){
//   alert(respArray[4]);
//   correctAnswer++;
// } else {
//   alert(respArray[5]);
// }
// // Question 4
// var userResponse = prompt(quesArray[3]).toUpperCase();
// if (userResponse === possAns[0 || 1]){
//   alert(respArray[6]);
//   correctAnswer++;
// } else {
//   alert(respArray[7]);
// }
// // Question 5
// var userResponse = prompt(quesArray[4]).toUpperCase();
// if (userResponse === possAns[0 || 1]){
//   alert(respArray[8]);
//   correctAnswer++;
// } else {
//   alert(respArray[9]);
// }

// Question 1
function question1 (){
  var yoyoTricks = prompt('Can I do any sweet Yo-Yo tricks?').toUpperCase();
  if (yoyoTricks === 'N' || yoyoTricks === 'NO') {
    alert(username + ', you are off to a good start, but I wish I could do sweet tricks');
  } else if (yoyoTricks === 'Y' || yoyoTricks === 'YES') {
    alert('I am sorry ' + username + ' but I am unable to do sweet tricks.');
  } else {
    alert('Please answer Y or N. Please refresh page to try again');
  }
  console.log('The user answered ' + yoyoTricks + ' to me being able to do sweet tricks.');

  if (yoyoTricks === 'N' || yoyoTricks === 'NO') {
    correctAnswer++;
  }
}
question1();

// Question 2
function question2 () {
  var stepMother = prompt('Do I have an evil Step Mother?').toUpperCase();
  if (stepMother === 'N' || stepMother === 'NO') {
    alert('That is corect! I only have an awesome mother!');
  } else if (stepMother === 'Y' || stepMother === 'YES') {
    alert('How dare you ' + username + '! Actually my mother is a sweetheart....');
  } else {
    alert('Please enter Y or N. Refresh page to try again');
  }
  console.log('The user answered ' + stepMother + ' to me having a evil stepmother');

  if (stepMother === 'N' || stepMother === 'NO') {
    correctAnswer++;
  }
}
question2();

// Question 3
function question3 () {
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
    correctAnswer++;
  }
}
question3();

// Question 4
function question4 () {
  var harryPotter = prompt('Am I just a little to obsessed with the Harry Potter series?').toUpperCase();
  if (harryPotter === 'N' || harryPotter === 'NO') {
    alert('Yeah, I was joking about getting that deathly hallows tattoo.....');
  } else if (harryPotter === 'Y' || harryPotter === 'YES') {
    alert('Me and you ' + username + ', deathly hallows tattoos together!');
  } else {
    alert('Please enter Y or N. Refresh page to try again');
  }
  console.log('The user answered ' + harryPotter + ' to a Harry Potter obsession.');

  if (harryPotter === 'Y' || harryPotter === 'YES') {
    correctAnswer++;
  }
}
question4();

// Question 5
function question5 () {
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
    correctAnswer++;
  }
}
question5();

// Question 6
function question6 () {

  var favGuess = 4;
  while(favGuess > 0) {
    var favNum = 16;
    var guessedNum = parseInt( prompt('Let\'s see if you can guess my favorite number. It is between 1 and 20. You have four tries and I will give you hints.'));
    if (guessedNum === favNum) {
      alert('Great job ' + username + ' 16 is my favorite number!!');
      favGuess = -1;
      correctAnswer++;
    } else if (guessedNum < favNum) {
      favGuess--;
      alert('Sorry ' + username + ' try again, it is higher than that. You have ' + favGuess + ' attempts left!');
    } else if (guessedNum > favNum) {
      favGuess--;
      alert('Sorry ' + username + ' try again, it is lower than that. You have ' + favGuess + ' attempts left!');
    }
  }
  if (favGuess === 0){
    alert('Sorry about your luck ' + username + ', you are out of guesses and my favorite number is 16.');
  }
  console.log('The user answered ' + guessedNum + ' about my favorite number being 16.');
}
question6();

// Question 7
function question7 () {
  var myStates = ['indiana', 'north carolina', 'arizona', 'california', 'georgia'];
  var stateGuess = 6;
  while(stateGuess > 0){
    var guessedState = prompt(username + ' can you guess another state I have lived in besides Washington? You will have 6 tries.').toLowerCase();

    for(var i = 0; i < myStates.length; i++){
      if (myStates[i] === guessedState){
        alert('That is correct! I have lived in Indiana, Arizona, California, North Carolina and Georgia');
        stateGuess = -1;
        correctAnswer ++;
        break;
      }
    }
    if (stateGuess > 0){
      stateGuess--;
      alert('Sorry that is not a state I have lived in. Try again. You have ' + stateGuess + ' tries remaining.');
    }

    if (stateGuess === 0){
      alert('You are out of guesses!');
    }
  }
  console.log('The user answered ' + guessedState + ' about states I\'ve lived in.');
}
question7();

alert(username + ' you correctly answered ' + correctAnswer + ' out of 7 questions correctly!!');
