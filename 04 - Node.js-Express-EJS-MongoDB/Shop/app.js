const express = require("express");
const path = require("path");

const session = require("express-session");
const SessionStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

const homeRouter = require("./routes/home.route");
const productRouter = require("./routes/product.route");
const authRouter = require("./routes/auth.route");
const cartRouter = require("./routes/cart.route");
const adminRouter = require("./routes/admin.route");
const orderRouter = require("./routes/orders.route");

const app = express();

app.use(express.static(path.join(__dirname, "images")));
app.use(flash()); //flash session use one time and expires delete automatic message

const STORE = new SessionStore({
    uri: "mongodb://localhost:27017/shop", // LINK
    collection: "sessions" // NAME THE collection
});


app.use(
    session({
        secret: "AYMAN THE BEST PROGRAMMER ON THE WORLD.", //SESSIONهذا لتشفير ال 
        saveUninitialized: false, //اذا بتحفظ الجلسة
        store: STORE, // save location
        resave: false
    })
);
// view engine setup
app.set("view engine", "ejs"); //ejs ضع القالب
app.set("views", "views"); // مكان الملفات

app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/admin", adminRouter);
app.use("/", orderRouter);

//
app.get("/error", (req, res, next) => {
    res.status(500); // error on server
    res.render("error.ejs", {
        isUser: req.session.userId,
        isAdmin: req.session.isAdmin,
        pageTitle: "Error"
    });
});

// لما تكون غير مسؤول و تدخل لصفحة من صفحات المسؤولين
app.get("/not-admin", (req, res, next) => {
    res.status(403); // not admin status code 403
    res.render("not-admin", {
        isUser: req.session.userId,
        isAdmin: false,
        pageTitle: "Not Allowed"
    });
});

// إذا الصفحة غير موجودة
app.use((req, res, next) => {
    res.status(404); // error page not found status code 404
    res.render("not-found", {
        isUser: req.session.userId,
        isAdmin: req.session.isAdmin,
        pageTitle: "Page Not Found"
    });
});


//منفذ الدخول للسيرفر
app.listen(5050, () => {
    console.log("server listen on port 8080");
});
