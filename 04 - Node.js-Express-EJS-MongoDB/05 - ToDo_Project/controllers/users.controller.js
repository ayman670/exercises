const users = require("../models/users.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
let DB_URL = "mongodb://localhost:27017/ToDo";


module.exports = {

    getsignUp : (req, res, next) => {
        res.render('signUp.ejs');
    },
    
    signUp: (req, res) => {
        mongoose.connect(DB_URL, async () => {
            //bring data from body and hashed a password
            let { username, email, password } = req.body;
            password = await bcrypt.hash(password, 10);
            const user = await new users({
                username,
                email,
                password,
            });
            await user.save();
            if (user.save()) {
                res.render('login.ejs')
            }
            mongoose.disconnect(DB_URL);
        });
    },


    getlogIn : (req, res, next) => {
        res.render('logIn.ejs');
    },

    logIn: (req, res, next) => {
        mongoose.connect(DB_URL, async () => {
            let { email, password } = req.body;
            const user = await users.findOne({ email });
            if (user) {
                try {
                    const hashed = bcrypt.compareSync(password, user.password);
                    if (hashed) {
                        const a = jwt.sign({ user: user._id }, "ayman best programerr", { expiresIn: "1h" })
                        req.session.userId = a;
                        req.session.user = user._id;
                        
                        mongoose.disconnect(DB_URL);
                        return res.redirect("/tasks")

                    }
                    else {
                        mongoose.disconnect(DB_URL);
                        return res.redirect('/l');
                    }

                } catch (error) {
                    mongoose.disconnect(DB_URL);
                    console.log(error)
                }

            }
            else {
                mongoose.disconnect(DB_URL);
                return res.redirect('/l');
            }

        })
    },

    logout: (req, res, next)=>{
        req.session.destroy();
        res.redirect('/l');
    }

    

}
