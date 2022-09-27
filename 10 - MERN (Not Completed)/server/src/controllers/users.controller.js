const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const userController = {};

//signup
userController.register = async (req, res , next)=>{
    const {name, email, password, joined} = req.body;
    const newUser = new User({
        name,
        email, 
        password, 
        joined
    });
    try{
     const user = await newUser.save();
     return res.send({user});
     
    }catch(e){
        if(e.code === 11000){
            var error = new Error(`email address is used (${newUser.email}) is alredy taket`);
            next(error);
        }else{
            console.log(e)
            next(e);
        }
        
    }
};

//login
userController.login = async (req, res, next) => {

    //Username and password in request
    const {email, password} = req.body;
    try{
        //check username and password are ok
        const user = User.findOne({email});
        if(!user){
            const err = new Error(`the email ${email} was not found`);
            err.status = 401;
            next(err);
        }

        user.isPasswordMatch = (password, user.password,(err, matched)=>{
            if(matched){
              return res.send({message : "you can login"})
            }

            res.status(401);
            res.send({
                error: "invalid username/password"
            })
        });

    }catch(e){
        next(e);
    }
}




module.exports = userController;