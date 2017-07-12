'use strict';
var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' + username);

var yoyoTricks = prompt(username + ', can I do any sweet Yo-Yo tricks?');
var yoyoUpper = yoyoTricks.toUpperCase();
switch (yoyoUpper) {
  case ('Y'):
    alert('I do not know how to do any sweet yo-yo tricks.');
    break;
  case ('YES'):
    alert('I do not know how to do any sweet yo-yo tricks.');
    break;
  case ('N'):
    alert('It is true, I have no yo-yo skills.');
    break;
  case ('NO'):
    alert('It is true, I have no yo-yo skills.');
    break;
  default:

}
console.log('The user answered ' + yoyoUpper + ' about me having sweet yo-yo tricks.');

var stepMother = prompt(username + ', do you think I have an Evil Step Mother?');
var motherUpper = stepMother.toUpperCase();
switch (motherUpper) {
  case ('Y'):
    alert('My mother is a sweetheart, you should be ashamed of yourself!!!!');
    break;
  case ('YES'):
    alert('My mother is a sweetheart, you should be ashamed of yourself!!!!');
    break;
  case ('N'):
    alert('YES!!! My mother is an amazing lady!');
    break;
  case ('NO'):
    alert('YES!!! My mother is an amazing lady!');
    break;
  default:

}
console.log('The user answered ' + motherUpper + ' about me having an evil step mother.');
// var yoyoTricks = prompt(username + ', can I do any sweet Yo-Yo tricks?');
// if (yoyoTricks === 'N') {
//   alert('That is correct, but I wish I could do sweet tricks');
// } else if (yoyoTricks === 'Y') {
//   alert('I am sorry but I am unable to do sweet tricks.');
// } else {
//   alert('Please answer Y/N or YES/NO. Please refresh page to try again');
// }
// console.log('The user answered ' + yoyoTricks + ' to me being able to do sweet yoyo tricks.');

// var stepMother = prompt(username + ', do you think I have an evil Step Mother?');
// if (stepMother === 'N') {
//   alert('That is corect! I only have an awesome mother!');
// } else if (stepMother === 'Y') {
//   alert('Actually my mother is a sweetheart....');
// } else {
//   alert('Please answer Y/N or YES/NO. Please refresh page to try again');
// }
// console.log('The user answered ' + stepMother + ' to me having a evil stepmother.');
//
// var drinkWater = prompt(username + ', should I be drinking more water?');
// if (drinkWater === 'Y') {
//   alert('You are right, I really should drink more water.');
// } else if (drinkWater === 'N') {
//   alert('I like the way you think! But I probably should drink more water.');
// } else {
//   alert('Please answer Y/N or YES/NO. Please refresh page to try again');
// }
// console.log('The user answered ' + drinkWater + ' to me drinking more water');
//
// var harryPotter = prompt(username + ', do you think I am just a little to obsessed with the Harry Potter series?');
// if (harryPotter === 'N') {
//   alert('Yeah, I was joking about getting that deathly hallows tattoo.....');
// } else if (harryPotter === 'Y') {
//   alert('We should get deathly hallows tattoos together!');
// } else {
//   alert('Please answer Y/N or YES/NO. Please refresh page to try again');
// }
// console.log('The user answered ' + harryPotter + ' to me having a Harry Potter obsession.');
//
// var fireFly = prompt('Finally ' + username + ', do I think the FireFly tv series is as good of a show as people say?');
// if (fireFly === 'Y') {
//   alert('It is a pretty freaking awesome show and I wish they would bring it back.');
// } else if (fireFly === 'N') {
//   alert('You are wrong, so so wrong.');
// } else {
//   alert('Please answer Y/N or YES/NO. Please refresh page to try again');
// }
// console.log('The user answered ' + fireFly + ' to me thinking FireFly is as good as people say');
