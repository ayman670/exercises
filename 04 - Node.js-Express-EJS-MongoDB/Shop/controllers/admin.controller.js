const productsModel = require("../models/products.model"); //import products.model.js
const ordersModel = require("../models/order.model"); // import order.model.js

const validationResult = require("express-validator").validationResult; //validation هذي تجيب النتيجة حقت التحقق 

exports.getAdd = (req, res, next) => { 
    res.render("add-product", {
        validationErrors: req.flash("validationErrors"), // هنا تجيب الأيرور ويجي كمصفوفة
        isUser: true, 
        isAdmin: true, 
        productAdded: req.flash("added")[0],// هنا تجيب الأيرور ويجي كمصفوفة
        pageTitle: "Add Product"
    });
};

exports.postAdd = (req, res, next) => {
    if (validationResult(req).isEmpty()) {
        req.body.image = req.file.filename;
        productsModel
            .addNewProduct(req.body)
            .then(() => {
                req.flash("added", true);// key , القيمة value     التعامل مع الأيرور 
                res.redirect("/admin/add");
            })
            .catch(err => {
                res.redirect("/error");
            });
    } else {
        req.flash("validationErrors", validationResult(req).array());// key , القيمة value     التعامل مع الأيرور 
        res.redirect("/admin/add");
    }
};

exports.getOrders = (req, res, next) => {
    ordersModel
        .getAllOrders()
        .then(items => {
            res.render("manage-orders", {
                pageTitle: "Manage Orders",
                isUser: true,
                isAdmin: true,
                items: items
            });
        })
        .catch(err => res.redirect("/error"));
};

exports.postOrders = (req, res, next) => {
    ordersModel
        .editOrder(req.body.orderId, req.body.status)
        .then(() => res.redirect("/admin/orders"))
        .catch(err => {
            res.redirect("/error");
        });
};
