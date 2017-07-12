// 'use strict';
// var username = prompt('What is your name?');
//
// alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');
//
// console.log('The user said their name is ' + username);
//
// var yoyoTricks = prompt(username + ', can I do any sweet Yo-Yo tricks?');
// var yoyoUpper = yoyoTricks.toUpperCase();
// switch (yoyoUpper) {
//   case ('Y'):
//     alert('I do not know how to do any sweet yo-yo tricks.');
//     break;
//   case ('YES'):
//     alert('I do not know how to do any sweet yo-yo tricks.');
//     break;
//   case ('N'):
//     alert('It is true, I have no yo-yo skills.');
//     break;
//   case ('NO'):
//     alert('It is true, I have no yo-yo skills.');
//     break;
//   default:
//     alert(username + ' I gave you instructions.... Try using yes or no, or if you want y or n');
//
// }
// console.log('The user answered ' + yoyoUpper + ' about me having sweet yo-yo tricks.');
//
// var stepMother = prompt(username + ', do you think I have an Evil Step Mother?');
// var motherUpper = stepMother.toUpperCase();
// switch (motherUpper) {
//   case ('Y'):
//     alert('My mother is a sweetheart, you should be ashamed of yourself!!!!');
//     break;
//   case ('YES'):
//     alert('My mother is a sweetheart, you should be ashamed of yourself!!!!');
//     break;
//   case ('N'):
//     alert('YES!!! My mother is an amazing lady!');
//     break;
//   case ('NO'):
//     alert('YES!!! My mother is an amazing lady!');
//     break;
//   default:
//     alert(username + ' I gave you instructions.... Try using yes or no, or if you want y or n');
//
// }
// console.log('The user answered ' + motherUpper + ' about me having an evil step mother.');
//
// var drinkWater = prompt(username + ', do you think I should be drinking more water?');
// var drinkUpper = drinkWater.toUpperCase();
// switch (drinkUpper) {
//   case ('Y'):
//     alert('You are probably right ' + username + ', I should drink more water.');
//     break;
//   case ('YES'):
//     alert('You are probably right ' + username + ', I should drink more water.');
//     break;
//   case ('N'):
//     alert('I like the way you think, beer is a much better option!');
//     break;
//   case ('NO'):
//     alert('I like the way you think, beer is a much better option!');
//     break;
//   default:
//     alert(username + ' I gave you instructions.... Try using yes or no, or if you want y or n');
// }
// console.log('The user answered ' + drinkUpper + ' about me drinking more water');
//
// var harryPotter = prompt(username + ', do you think I have a little bit of an obsession with the Harry Potter series?');
// var harryUpper = harryPotter.toUpperCase();
// switch (harryUpper) {
//   case ('Y'):
//     alert('I hope you do too, then we could get Deathly Hallows tattoos together!!');
//     break;
//   case ('YES'):
//     alert('I hope you do too, then we could get Deathly Hallows tattoos together!!');
//     break;
//   case ('N'):
//     alert('I was only kidding about getting Deathly Hallows tattoos, seriosuly....');
//     break;
//   case ('NO'):
//     alert('I was only kidding about getting Deathly Hallows tattoos, seriosuly....');
//     break;
//   default:
//     alert(username + ' I gave you instructions.... Try using yes or no, or if you want y or n');
// }
// console.log('The user answered ' + harryUpper + ' about me having an obsession with Harry Potter');
//
// var fireFly = prompt(username + ', do I think that FireFly and Serenity are as good as people say?');
// var fireUpper = fireFly.toUpperCase();
// switch (fireUpper) {
//   case ('Y'):
//     alert('Well it is true! I am still made about Netflix and their rotten April fools joke.');
//     break;
//   case ('YES'):
//     alert('Well it is true! I am still made about Netflix and their rotten April fools joke.');
//     break;
//   case ('N'):
//     alert('You are wrong.....WRONG!');
//     break;
//   case ('NO'):
//     alert('You are wrong.....WRONG!');
//     break;
//   default:
//     alert(username + ' I gave you instructions.... Try using yes or no, or if you want y or n');
// }
// console.log('The user answered ' + fireUpper + ' about my feelings on FireFly.');

'use strict';
var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' +username);

var yoyoTricks = prompt('Can I do any sweet Yo-Yo tricks?').toUpperCase();
if (yoyoTricks === 'N' || yoyoTricks ==='NO') {
  alert('That is correct, but I wish I could do sweet tricks');
} else if (yoyoTricks === 'Y' || yoyoTricks === 'YES') {
  alert('I am sorry but I am unable to do sweet tricks.');
} else {
  alert('Please answer Y or N. Please refresh page to try again');
}
console.log('The user answered ' +yoyoTricks + ' to me being able to do sweet tricks.');

var stepMother = prompt('Do I have an evil Step Mother?').toUpperCase();
if (stepMother === 'N' || stepMother === 'NO') {
  alert('That is corect! I only have an awesome mother!');
} else if (stepMother === 'Y' || stepMother === 'YES') {
  alert('Actually my mother is a sweetheart....');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + stepMother + ' to me having a evil stepmother');

var drinkWater = prompt('Should I be drinking more water?').toUpperCase();
if (drinkWater === 'Y' || drinkWater === 'YES') {
  alert('You are right, I really should drink more water.');
} else if (drinkWater === 'N' || drinkWater === 'NO') {
  alert('I like the way you think! Beer and whiskey are so much better!.');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + drinkWater + ' to me drinking more water');

var harryPotter = prompt('Am I just a little to obsessed with the Harry Potter series?').toUpperCase();
if (harryPotter === 'N' || harryPotter === 'NO') {
  alert('Yeah, I was joking about getting that deathly hallows tattoo.....');
} else if (harryPotter === 'Y' || harryPotter === 'YES') {
  alert('We should get deathly hallows tattoos together!');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + harryPotter + ' to a Harry Potter obsession.');

var fireFly = prompt('Do I think the FireFly tv series is as good of a show as people say?').toUpperCase();
if (fireFly === 'Y' || fireFly === 'YES') {
  alert('It is a pretty freaking awesome show and I wish they would bring it back.');
} else if (fireFly === 'N' || fireFly === 'NO') {
  alert('You are wrong, so so wrong.');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + fireFly + ' to me thinking FireFly is as good as people say');
