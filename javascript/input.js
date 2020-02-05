// console and file input

const readline = require('readline');

// Console config
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console input
user.question('Enter a filename: ', function(filename) {
  console.log(filename);
});

// This part isnt after the console input
console.log('here');
