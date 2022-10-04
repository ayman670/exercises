const router = require("express").Router();
const check = require("express-validator").check;//نستخدمها للتحقق من المدخلات
const multer = require("multer"); //للتعامل مع رفع البيانات
const bodyParser = require("body-parser");

const adminController = require("../controllers/admin.controller");
const adminGuard = require("./guards/admin.guard");

router.get("/add", adminGuard, adminController.getAdd);

router.post(

    "/add",  //  add الرابط التشعبي    admin/add
    adminGuard,  //او لا admin يتحقق هل هو
    multer({//object نسوي 

        storage: multer.diskStorage({ 
            destination: (req, file, cb) => { // cb callback function
                cb(null, "images/");// error , folder save
            },
            filename: (req, file, cb) => { // cb callback function
                cb(null, Date.now() + "-" + file.originalname); // error,+الوقت تكون كل مللي ثانية يتغير ف يصير مختلف uniqeعشان الأسم يصير  "" +file name
            }
        })
    }).single("image"),
    check("name")
        .not()
        .isEmpty()
        .withMessage("name is required"),
    check("price")
        .not()
        .isEmpty()
        .withMessage("price is required")
        .isFloat({ min: 0.0000000009 })
        .withMessage("price must be greater than 0"),
    check("description")
        .not()
        .isEmpty()
        .withMessage("description is required"),
    check("category")
        .not()
        .isEmpty()
        .withMessage("category is required"),
    check("image").custom((value, { req }) => {
        if (req.file) return true; //not null لو يوجد ملف 
        else throw "image is required"; 
    }),
    adminController.postAdd
);

router.get("/orders", adminGuard, adminController.getOrders);

router.post(
    "/orders",
    adminGuard,
    bodyParser.urlencoded({ extended: true }),
    adminController.postOrders
);

module.exports = router;
