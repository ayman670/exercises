const router = require("express").Router();
const bodyParser = require("body-parser");// body التعامل مع 
const check = require("express-validator").check;  //نستخدمها للتحقق من المدخلات

const orderController = require("../controllers/order.constroller");
const authGuard = require("./guards/auth.guard");

router.get("/verify-order", authGuard.isAuth, orderController.getOrderVerify);

router.get("/orders", authGuard.isAuth, orderController.getOrder);

router.post(
    "/orders",
    authGuard.isAuth,
    bodyParser.urlencoded({ extended: true }), //req bodyللتعامل مع 
    check("address")
        .not()
        .isEmpty()
        .withMessage("address is required"),
    orderController.postOrder
);

router.post(
    "/orders/cancel",
    authGuard.isAuth,
    bodyParser.urlencoded({ extended: true }),
    orderController.postCancel
);

module.exports = router;
