const express = require('express');
const app = express();
const router = require('./routers/tasks');

const methodOverride = require('method-override');
app.use(methodOverride('_method', { methods: ["POST", 'GET'] }));

//for view ejs
app.set("view engine", "ejs");
// middleware  read from body (form or any)
app.use(express.urlencoded({ extended: true }));

app.use('/', router);




app.listen(8080, () => {
    console.log("server listen on port  http://localhost:8080");
});