const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {Schema} = mongoose;

const userSchema = Schema({
    name : {type : String},
    email : {type : String , unique : true , required: true, index: true},
    password : {type : String, required : true},
    date : {type : Date, default: new Date()}
}
);



userSchema.pre('save', async (next)=>{

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

userSchema.methods.isPasswordCorrect = (password, hashed, callback) => {
    bcrypt.compare(password, hashed, (err, success)=>{
        if(err) {return callback(err); }
        
        callback(null, success);
    })
}

// يبغالها مراجعة
// بحذف (الرمز الباسورد) من قاعدة البيانات عشان مايطلع الرمز المشفر
// userSchema.methods.toJSON = ()=>{
//     let userObject = this.toObject();
//     delete userObject.password;
//     return userObject;
// }

const User = mongoose.model('test',userSchema);
module.exports = User;
