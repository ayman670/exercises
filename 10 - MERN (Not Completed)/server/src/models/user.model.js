const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { use } = require('../app');

const {Schema} = mongoose;

const userSchema = Schema({
    name : {type : String},
    email : {type : String , unique : true , required: true, index: true},
    password : {type : String, required : true},
    date : {type : Date, default: new Date()}
}
);


// i use function here becuse arrow not run === error;
userSchema.pre('save', async function(next){

    //Check new account or password is Modified
    if(!this.isModified('password')){
        return next()
    }

    //encrypt the password
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next()
    }catch(e){
        return next(e);
    }
})


const User = mongoose.model('test',userSchema);
module.exports = User;
