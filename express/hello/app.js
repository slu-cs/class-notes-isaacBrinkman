// traditional name for express web server file
// Hello World web server
const express = require('express');

// Create the server
const app = express();

// Respond to a single request
app.get('/', function(request, response){
  response.send('Hello Isaac');
});

// Start the server
app.listen(3000);
console.log('Server is Ready.');
