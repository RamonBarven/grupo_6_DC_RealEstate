const { check } = require('express-validator');
let validateSignupU = [
    check('name')
        .notEmpty().withMessage('Complete your name').bail()
        .isLength({ min: 2 }).withMessage('Name must be at least 2 letters long'),
    check('lastname')
        .notEmpty().withMessage('Complete your name').bail()
        .isLength({ min: 2 }).withMessage('Last name must be at least 2 letters long'),
    check('email')
        .notEmpty().withMessage('Complete your email').bail()
        .isEmail().withMessage('Email must be valid'),
    check('password')
        .notEmpty().withMessage('Complete your password').bail()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
]

module.exports= validateSignupU;