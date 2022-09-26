const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = Schema({
    name : {type : String},
    email : {type : String , unique : true , required: true, index: true},
    password : {type : String, required : true},
    date : {type : Date, default: new Date()}
});

const User = mongoose.model(userSchema, '');
module.exports = User;
