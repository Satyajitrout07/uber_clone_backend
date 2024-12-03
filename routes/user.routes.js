const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');



router.post('/register',[
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).
    withMessage('First name must be at least 3 chracter'),
    body('password').isLength({min:6}).
    withMessage('password must be at least 6 chracter')
    
],userController.registerUser
);

module.exports = router;