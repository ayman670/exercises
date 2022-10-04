const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


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
            let error = new Error(`email address is used (${newUser.email}) is alredy taket`);
            next(error);
        }else{
            console.log(e)
            next(e);
        }
        
    }
};



//login
userController.login = async (req, res, next) => {

    //email and password in request
    const {email, password} = req.body;
    try{
        //check email and password are ok
        const user = await User.findOne({email});

        if(!user){
            const err = new Error(`the email ${email} was not found`);
            err.status = 401;
            next(err);
        }

        user.isPasswordCorrect(password, user.password,(err, success)=>{
            if(success){
                //if ok , create JWT and return
                //secret
                //expire
                const secret = process.env.JWT_SECRET;
                const expire = process.env.JWT_EXPIRATION;

                const token = jwt.sign({_id: user._id}, secret, {expiresIn: expire})
                return res.send({token})
            }else{
                res.status(401);
                res.send({
                    error: "invalid email or password"
                })
            }
           
        });


    }
    catch(e){
        next(e);
    }
}




module.exports = userController;