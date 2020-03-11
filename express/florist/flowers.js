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
  const flower = flowers.find(f => f.id === request.params.id);
  if(!flower){
    next();
  }
  else{
    response.send(flower);
  }
});

// POST /flowers
router.post('/',function(request, response){
  const flower = request.body;
  if(flowers.find(f => f.id === flowers.id)){
    response.status(400).send('Duplicate id');
  }
  if(!flowers.id){
    response.status(400).send('No id');

  }else {
    flowers.push(flower);
    response.status(201).send(flowers);
  }
});


// DELETE /flowers/id
router.delete('/:id',function(request, response, next){
  const flower = flowers.find(f => f.id === flowers.id)
  if(!flower){
    next();
  }
  else{
    flowers = flowers.filter(f => f.id !== flower.id);
    response.status(200).send(flowers);
  }
});


// PUT /flowers/id
router.put('/:id',function(request, response, next){
  const flower = flowers.find(f => f.id === flowers.id)
  if(!flower){
    next();
  } else {
    if(request.body.color) flower.color = request.body.color;
    if(request.body.season) flower.season = request.body.season;
    response.status(200).send(flowers);

  }

});
module.exports = router;
