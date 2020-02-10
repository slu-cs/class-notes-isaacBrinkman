// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // connect to database

// Create some faculty
const harcourt = new Professor({
  name: 'Ed Harcourt',
  rank: 'Full',
  started: 2003,
  courses: [140,220,345,362,364]
});

const torrey = new Professor({
  name: 'Lisa Torrey',
  rank: 'Associate',
  started: 2009,
  courses: [140,219,332,362,374,380]
});

const lee = new Professor({
  name: 'Choong-Soo Lee',
  rank: 'Associate',
  started: 2010,
  courses: [140,219,256,321,370]
});

// delete any previous data
mongoose.connection.dropDatabase(function(){
  // this function is called after the database is dropped
  // so new data must be saved here
  harcourt.save(function(error){
    if(error) console.error(error.stack);
    torrey.save(function(error){
      if(error) console.error(error.stack);
      lee.save(function(error){
        if(error) console.error(error.stack);
        // disconnect
        mongoose.connection.close(function(){
          console.log("DB is ready");
        });
      });
    });
  });
};
