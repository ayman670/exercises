const Task = require("../models/tasks");
const mongoose = require('mongoose');
let DB_URL = "mongodb://localhost:27017/ToDo";


module.exports = {
    index: (req, res) => {
        mongoose.connect(DB_URL, () => {
            Task.find({userId : req.session.user}, (err, tasks) => {
                if(req.session.userId){
                if (err) {
                    console.log(`there was in error : ${err}`);
                    mongoose.disconnect();
                }
                else {
                    res.render("todo.ejs", { todotasks: tasks });
                    mongoose.disconnect();

                }
            }else{
                res.redirect("/l")
            }
    
            })
        })
    },

    create: (req, res) => {
        mongoose.connect(DB_URL, (err) => {
            let firstTask = new Task({ title: req.body.title, userId : req.session.user });
            if (err) {
                console.log(`there was in error : ${err}`);
                mongoose.disconnect();
            }
            else {
                firstTask.save((err, result) => {
                    res.redirect('/tasks')
                    mongoose.disconnect();
                })
            }
        })
    },
    edit:(req, res) => {

        mongoose.connect(DB_URL, (err) => {
            const id = req.params.id;
            Task.find({}, (err, tasks) => {
                if (err) {
                    console.log(`there was in error : ${err}`);
                    mongoose.disconnect();
                }
                else {
                    res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
                    mongoose.disconnect();
                }
    
            });
        });
    },

    update: (req, res) => {
        mongoose.connect(DB_URL, (err) => {
            const id = req.params.id;
            Task.findByIdAndUpdate(id, {title: req.body.title},(err, tasks) => {
                // if(err) return res.send(500,err);
                // else res.redirect("/");
                if (err) {
                    mongoose.disconnect();
                    return res.send(500,err);
                    
                }
                else {
                    res.redirect("/tasks");
                    mongoose.disconnect();
                }
    
            });
        });
    },
    delete:(req, res) => {

        mongoose.connect(DB_URL, () => {
            Task.deleteOne({ id: req.params.id }, (err) => {
                if (err) {
                    console.log(`there was in error : ${err}`);
                    mongoose.disconnect();
                }
                else {
                    res.redirect('/tasks')
                    mongoose.disconnect();
                }
    
            })
        })
    }
};