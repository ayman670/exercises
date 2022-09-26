
const express = require("express");
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method', { methods: ["POST", 'GET'] }));

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
});

const Students = mongoose.model("student", userSchema);

DB_URL = "mongodb://localhost:27017/MyStudents";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//CRUD

//C
app.post("/create", (req, res) => {
  mongoose.connect(DB_URL, (err) => {
    let newStudents = new Students({
      name: req.body.name,
      age: req.body.age,
    });
    if (err) {
      mongoose.disconnect();
      console.log(`something is wrong ${err}`);
    } else {
      newStudents.save((err, result) => {
        mongoose.disconnect();
        res.redirect("/");
      });
    }
  });
});

//R
app.get("/", (req, res) => {
  mongoose.connect(DB_URL, () => {
    Students.find({}, (err, record) => {
      if (err) {
        console.log(err);
        mongoose.disconnect();
      } else {
        res.render("index.ejs", { record: record });
        mongoose.disconnect();
      }
    });
  });
});

//U
app.put("/update/:id", (req, res) => {
  mongoose.connect(DB_URL, () => {
    let _id = req.params.id;
    Students.findByIdAndUpdate(_id,{ name: req.body.name, age: req.body.age },(err) => {
        if (err) {
          console.log(err);
          mongoose.disconnect();
        } else {
          
          res.redirect("/");
          mongoose.disconnect();
        }
      }
    );
  });
});

//D
app.post("/delete/:id", (req, res) => {
  mongoose.connect(DB_URL, () => {
    let _id = req.params.id;
    Students.findByIdAndDelete(_id, (err) => {
      if (err) {
        console.log(err);
        mongoose.disconnect();
      } else {
        console.log("delete one");
        mongoose.disconnect();
        res.redirect("/");
      }
    });
  });
});

app.listen(8080, console.log(`server listen to http://localhost:8080`));
