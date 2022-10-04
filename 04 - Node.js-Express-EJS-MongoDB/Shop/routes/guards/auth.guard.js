exports.isAuth = (req, res, next) => {
    if (req.session.userId) next(); //if user إذا كان مستخدم
    else res.redirect("/login"); 
};

exports.notAuth = (req, res, next) => {
    if (!req.session.userId) next(); // if not user إذا كان ليس مستخدم
    else res.redirect("/"); 
};
