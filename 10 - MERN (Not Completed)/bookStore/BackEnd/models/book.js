const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = Schema({
    name:{
        type : String,
        required: true
    },
    author:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    available:{
        type : Boolean,
    }
})

module.exports = mongoose.model('book', bookSchema);