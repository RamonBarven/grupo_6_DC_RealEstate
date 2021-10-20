const { check } = require('express-validator');
function addProductValid(req, res, next){
    next();
    return validation;
    
}
let validation = [
    check('location')
        .notEmpty().withMessage('Complete the location').bail()
        .isLength({ min: 5 }).withMessage('Location must be at least 5 letters long'),
    check('description')
        .notEmpty().withMessage('Complete with the description').bail()
        .isLength({ min: 20 }).withMessage('Description must be at least 20 characters long'),
    check('price')
        .notEmpty().withMessage('Add the price').bail()
        .isInt().withMessage('Price must be a whole number'),
    check('category')
        .notEmpty().withMessage('Select a category').bail(),
    check('sqft')
        .notEmpty().withMessage('Add the square feet').bail(),
    check('floors')
        .notEmpty().withMessage('Floors cannot be blank').bail()
        .isInt().withMessage('Floors must be a whole number'),
    check('beds')
        .notEmpty().withMessage('Beds cannot be blank').bail()
        .isInt().withMessage('Beds must be a whole number'),
    check('baths')
        .notEmpty().withMessage('Baths cannot be blank').bail()
]

module.exports= addProductValid;