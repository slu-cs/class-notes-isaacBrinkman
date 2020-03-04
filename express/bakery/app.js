// traditional name for express web server file
// Hello World web server
const express = require('express');

// Create the server
const app = express();

// Logs requests to the console
app.use(function(request, response, next){
  console.log('---------------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body = ', request.body
  next(); // Keep handling this request
});

// Home page
app.get('/', function(request, response){
  response.send(`
    <h1>Bakery</h1>
    <ul>
      <li><a href="/cakes">Cakes</a></li>
      <li><a href="/pies">Pies</a></li>
    </ul>
    `);
});

// Handle Undefined routes
app.use(function(request, response, next){
  console.log('Replies with 404');
  response.status(404).end();
});

// handle other errors
app.use(function(error, request, response, next){
  console.error(error.stack);
  // sending the bug into the code is a security flaw
  // this is only fro security purposes
  response.status(500).send(error.message);
});

// Start the server
app.listen(3000);
console.log('Server is Ready.');
