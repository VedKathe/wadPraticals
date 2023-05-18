require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.DATABASE_URL,{})
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));

const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);


app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})