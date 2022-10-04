const express = require('express');
const router = express.Router();
const passpoert = require('passport');

const userController = require('../controllers/users.controller');
const expenseController = require('../controllers/expense.controller')



// Auth and sign up
router.post('/register', userController.register);
router.post('/auth', userController.login);


// Customize and protect the routes
router.all('*', (req, res, next)=>{
    passpoert.authenticate('jwt', {session: false}, (err, user) =>{
        if (err || !user) {
            const error = new Error("You are not authorized to access this area");
            error.status = 401;
            throw error;
        }

        //
        req.user = user;
        return next();
    })(req, res, next);
});



// ----------------- Protected Routes ----------//
router.get('/expense', expenseController.get);
router.post('/expense', expenseController.create);
router.put('/expense/:_id', expenseController.update);
router.delete('/expense/:_id', expenseController.destroy);





module.exports = router;