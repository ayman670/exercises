const router = require('express').Router();
const auth = require('../controllers/users.controller') ;

router.get('/', auth.getsignUp);
router.get('/l', auth.getlogIn);
router.get('/logout', auth.logout);

router.post('/signup', auth.signUp);
router.post('/login', auth.logIn);



module.exports = router;