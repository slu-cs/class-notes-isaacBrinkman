// Name:

//////////////////////////////////////////////////////////////// Question 1

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
const seats = labs.map(s => s.seats);
console.log(seats);

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
const seats10 = labs.filter(s => s.seats > 10);
console.log(seats10);
// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
const sortedSeats = labs.sort((a,b) => a.seats - b.seats)
console.log(sortedSeats);

//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
const num = numbers.find(n => (n%2)===0);
console.log(num);

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.
const find = function(a,f){
  for(const e of a){
    if(f(e)) return e
  }
}

//////////////////////////////////////////////////////////////// Question 3
/*
// This creates the user object described on the quiz.
// It has a question method you can call in part A.
const readline = require('readline');
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // A. Make small talk, using traditional callbacks.
user.question('What is your name? ', function(name) {
    user.question("Hello "+name+"\n How are you doing? ",function(state){
        console.log("I am also " + state);
      })
    });


// The user.question method doesn't actually return a promise, so here is a question function that does.
// Call this question function in part B instead of calling the user.question method.
const question = function(prompt) {
  return new Promise(resolve => user.question(prompt, resolve));
};

// B. Make small talk again, using promises.
question('What is your name? ')
  .then(n => console.log("Hello " + n))
  .then(() => question("How are you doing? "))
  .then(n => console.log("I am also " + n));
*/
//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.

// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.
f1Count = f1();
f2Count = f2();
Promise.all([f1Count, f2Count])
  .then((a) => console.log(a[0], a[1]))
  .then(function(a){
    if(a[0] > a[1]){
      console.log('f1');
    }
    if(a[1] > a[0]){
      console.log('f2');
    }
    else{
      print('equal');
    }
  });
