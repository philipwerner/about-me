var username = prompt('What is your name?');

alert('Hello ' + username + '. Lets play a quick game! Please answer Y/N to the following questions.');

console.log('The user said their name is ' +username);

var yoyoTricks = prompt('Can I do any sweet Yo-Yo tricks?');
if (yoyoTricks == 'N') {
  alert('That is correct, but I wish I could do sweet tricks');
} else if (yoyoTricks == 'Y') {
  alert('I am sorry but I am unable to do sweet tricks.');
} else {
  alert('Please answer Y or N. Please refresh page to try again');
}
console.log('The user answered ' +yoyoTricks);

var stepMother = prompt('Do I have an evil Step Mother?');
if (stepMother == 'N') {
  alert('That is corect! I only have an awesome mother!');
} else if (stepMother == 'Y') {
  alert('Actually my mother is a sweetheart....');
} else {
  alert('Please enter Y or N. Refresh page to try again');
}
console.log('The user answered ' + stepMother);
