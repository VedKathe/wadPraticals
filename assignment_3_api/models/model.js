const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String
  },
  age: {
    require: true,
    type: Number
  },
  rollno: Number,
  
},{timestamps:true})

const model = mongoose.model('Data', dataSchema);
module.exports = model;