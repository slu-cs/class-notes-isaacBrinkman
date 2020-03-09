// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const pies= [
  {id: 'apple', flavor:'Apple'},
  {id: 'cherry', flavor:'Cherry'}

]

// cs-linuxlab-##.stlawu.edu:3000/cakes/
router.get('/', function(request, response) {
  response.render('pies/index', {pies: piespie});
});

// cs-linuxlab-##.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {
  // Pretend database lookup
  const pie = pies.find(cake => pie.id === request.params.id);
  if(!pie) {
    next(); // Pass on the request
  } else{
    response.render('pies/detail', {pie: pie});
  }
});

module.exports = router;
