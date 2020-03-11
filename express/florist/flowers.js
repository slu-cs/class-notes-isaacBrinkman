// Router for a flower collection
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database
let flowers = [
  {id: 'tulip', color: 'pink', season:'spring'},
  {id: 'rose', color: 'red', season:'summer'},
];

// GET /flowers
router.get('/', function(request, response){
  response.send(flowers);
});
// GET /flowers/id
router.get('/:id', function(request, response, next){
  const fl = flowers.find(f => f.id === request.params.id);
  if(!flower){
    next();
  }
  else{
    response.send(fl);
  }
});

// POST /flowers



// DELETE /flowers/id

// PUT /flowers/id

module.exports = router;
