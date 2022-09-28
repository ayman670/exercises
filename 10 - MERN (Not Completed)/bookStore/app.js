const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/bookRoutes')

const app = express();

//moddleWares
app.use(express.json()); // for body json
app.use("/books",router);


mongoose.connect("mongodb://localhost:27017/bookStore", () =>{
    console.log("connect to database");
})
app.listen(8080)