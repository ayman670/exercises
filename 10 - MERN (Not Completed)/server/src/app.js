const express = require('express');
const app = express();
const mongoose = require('mongoose')
const logger = require('morgan');
const bodyParser = require('body-parser');

const v1 = require('./routes/v1');


//------------ DB Config ------------//
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('connected',()=>{
console.log('hello connnnn')
});
mongoose.connection.on('error',(err)=>{
    console.log(err)
    });


//------------ Midellewares ------------//
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//------------ Routes ------------//
app.use('/api/v1',v1)

//------------ Errors ------------//


app.use((req, res, next) => {
    res.status(404); // error page not found status code 404
    res.send({
        message: 'not found'
    });
});

// for any error
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const error = err.message || 'Error processing your request';
    res.status(status);
    res.send({
        error
    })
});


module.exports = app;