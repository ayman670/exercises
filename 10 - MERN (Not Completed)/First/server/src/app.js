const express = require('express');
const app = express();
const mongoose = require('mongoose')
const logger = require('morgan');
const bodyParser = require('body-parser');

const v1 = require('./routes/v1');


//------------ DB Config ------------//
mongoose.connect("mongodb://localhost:27017/MERN");
mongoose.connection.on('connected',()=>{
console.log('hello connnnn')
});
mongoose.connection.on('error',(err)=>{
    console.log(err)
    });


//------------ Midellewares ------------//
app.use(logger('start'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//------------ Routes ------------//
app.use('/api/v1',v1)


module.exports = app;