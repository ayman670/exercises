const mongoose = require('mongoose');

const {Schema} = mongoose;

const users = new Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('user', users)