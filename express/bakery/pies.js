// Router for cake related requests
const express = require('express');

// Create the Router
const router = express.Router();


// cs-linuxlab-07.stlawu.edu:3000/cakes
router.get('/',function(req, res){
  res.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/cherry">cherry</a></li>
      <li><a href="/cakes/apple">apple</a></li>
    </ul>
    `)

});

// cs-linuxlab-07.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, reponse, next){
  if((request.params.id === 'cherry')){
    response.send('cherry Cakes')
  }
  else if((request.params.id === 'apple')){
    response.send('apple Cakes')
  }
  else{
    next(); // Pass on the request
  }
});
