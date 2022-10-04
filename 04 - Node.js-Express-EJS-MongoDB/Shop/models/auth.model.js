const mongoose = require("mongoose"); // MongoDB مكتبة لتسهيل التعامل مع 

const bcrypt = require("bcrypt"); //مكتبة التشفير

const DB_URL = "mongodb://localhost:27017/shop"; //DB رابط 

// Documentsالكايروكي حق ال
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// name of Collections and Schema
const User = mongoose.model("user", userSchema);

exports.createNewUser = (username, email, password) => {
    // Check if email exists
    // Yes ==> error
    // No ==> create new user
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                return User.findOne({ email: email });
            })
            .then(user => {
                if (user) { //email exists 
                    mongoose.disconnect();
                    reject("email is used");
                } else {
                    return bcrypt.hash(password, 10); // hashed Password
                }
            })
            .then(hashedPassword => {
                let user = new User({
                    username: username,
                    email: email,
                    password: hashedPassword
                });
                return user.save();
            })
            .then(() => {
                mongoose.disconnect();
                resolve();
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.login = (email, password) => {
    // Check if email exists
    // No ==> error
    // Yes ==> Check for password 
    //if no ==> error 
    //if yes ==> SET SESSION 
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => User.findOne({ email: email }))
            .then(user => {
                if (!user) {
                    mongoose.disconnect();
                    reject("there is no user matches this email");
                } else {
                    bcrypt.compare(password, user.password).then(same => {
                        if (!same) {
                            mongoose.disconnect();
                            reject("password is incorrect");
                        } else {
                            mongoose.disconnect();
                            resolve({
                                id: user.email,
                                isAdmin: user.isAdmin
                            });
                        }
                    });
                }
            })
            .catch(err => {
                mongoose.disconnect();
                 (err);
            });
    });
};
