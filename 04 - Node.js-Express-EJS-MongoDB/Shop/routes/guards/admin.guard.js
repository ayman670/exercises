
module.exports = (req, res, next) => {
    if (req.session.isAdmin) next(); //if admin إذا كان مسوؤل 
    else res.redirect("/not-admin"); // false : not-admin سويي له اعادة توجيه لصفحة 
};
