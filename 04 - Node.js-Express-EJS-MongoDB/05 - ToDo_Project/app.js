const express = require('express');
const app = express();
const router = require('./routers/tasks.routes');
const auth = require('./routers/users.routes');
const session = require('express-session');

const methodOverride = require('method-override');

app.use(session({
    secret:"ashh",
    resave: false, 
    saveUninitialized: false
}))
app.use(methodOverride('_method', { methods: ["POST", 'GET'] }));

//for view ejs
app.set("view engine", "ejs");
// middleware  read from body (form or any)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
app.use('/', auth);





app.listen(process.env.PORT || 7070, () => {
    console.log("server listen on port  http://localhost:7070");
});