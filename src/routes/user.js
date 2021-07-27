let express=require('express');
let router= express.Router();
let usersController=require("../controllers/users/usersController");

router.get('/login', usersController.login);
router.get('/signup', usersController.signup);
router.post('/signup', usersController.signuppost);
router.get('/favorites', usersController.favorites);

module.exports=router;