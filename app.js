'use strict';
var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' +username);

var yoyoTricks = prompt('Can I do any sweet Yo-Yo tricks?');
if (yoyoTricks === 'N', 'NO') {
  alert('That is correct, but I wish I could do sweet tricks');
} else if (yoyoTricks === 'Y') {
  alert('I am sorry but I am unable to do sweet tricks.');
} else {
  alert('Please answer Y/N or YES/NO. Please refresh page to try again');
}
console.log('The user answered ' +yoyoTricks + ' to me being able to do sweet yoyo tricks.');

var stepMother = prompt('Do I have an evil Step Mother?');
if (stepMother === 'N', 'NO') {
  alert('That is corect! I only have an awesome mother!');
} else if (stepMother === 'Y') {
  alert('Actually my mother is a sweetheart....');
} else {
  alert('Please answer Y/N or YES/NO. Please refresh page to try again');
}
console.log('The user answered ' + stepMother + ' to me having a evil stepmother.');

var drinkWater = prompt('Should I be drinking more water?');
if (drinkWater === 'Y', 'YES') {
  alert('You are right, I really should drink more water.');
} else if (drinkWater === 'N') {
  alert('I like the way you think! But I probably should drink more water.');
} else {
  alert('Please answer Y/N or YES/NO. Please refresh page to try again');
}
console.log('The user answered ' + drinkWater + ' to me drinking more water');

var harryPotter = prompt('Am I just a little to obsessed with the Harry Potter series?');
if (harryPotter === 'N', 'NO') {
  alert('Yeah, I was joking about getting that deathly hallows tattoo.....');
} else if (harryPotter === 'Y') {
  alert('We should get deathly hallows tattoos together!');
} else {
  alert('Please answer Y/N or YES/NO. Please refresh page to try again');
}
console.log('The user answered ' + harryPotter + ' to me having a Harry Potter obsession.');

var fireFly = prompt('Do I think the FireFly tv series is as good of a show as people say?');
if (fireFly === 'Y', 'YES') {
  alert('It is a pretty freaking awesome show and I wish they would bring it back.');
} else if (fireFly === 'N') {
  alert('You are wrong, so so wrong.');
} else {
  alert('Please answer Y/N or YES/NO. Please refresh page to try again');
}
console.log('The user answered ' + fireFly + ' to me thinking FireFly is as good as people say');
