const User = require('../models/user.model');
const userController = {};

userController.register = (req, res , next)=>{
    const {name, email, password, joined}= req.body;
    const newUser = new User({
        name,
        email, 
        password, 
        joined
    });
    newUser.save()
};



module.exports = userController