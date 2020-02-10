// Define a plan for a collection

const mongoose = require('mongoose');

// Schema for a collection of professors
const Professor = new mongoose.Schema({
  name: String,
  rank: String,
  started: Number,
  courses: [Number]
});

// Speed up queries on all fields
Proffesor.index({name: 1});
Proffesor.index({rank: 1});
Proffesor.index({started: 1});
Proffesor.index({courses: 1});

// Compile and export this schema
module.exports = mongoose.model('Professor', Professor);
