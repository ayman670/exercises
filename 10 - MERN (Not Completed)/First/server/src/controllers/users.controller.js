const User = require('../models/user.model');
const userController = {};

userController.register = async (req, res , next)=>{
    const {name, email, password, joined} = req.body;
    const newUser = new User({
        name,
        email, 
        password, 
        joined
    });

    try{
     const user = await newUser.save()
     return res.send({user});
    }catch(e){
        if(e.code == 11000 && e.name == "MongoError"){
            let error = new Error(`email address is used ${newUser.email} is alredy taket`);
            next(error)
        }else{
            next(e); console.log(e)
        }
        
    }
   
};



module.exports = userController;