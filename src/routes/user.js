let express=require('express');
let router= express.Router();
const multer = require('multer');
const path = require('path')
let usersController=require("../controllers/users/usersController");
let loginMiddleware=require('../Middlewares/loginMiddleware');
let noLoginMiddleware=require('../Middlewares/noLoginMiddleware');
let validateSignupU=require('../Middlewares/signUpValid');
let imageValid=require('../Middlewares/imageValid');
let emailValid=require('../Middlewares/emailValid');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        let rutaImage=path.join(__dirname+'../../../public/user/img/uploads');
        cb(null, rutaImage);
    },
    filename: function(req, file, cb){
        let name = 'userImage-'+ Date.now()+path.extname(file.originalname);
        cb(null, name);
    }
});

let upload = multer({storage: storage});

router.get('/edit/:id',loginMiddleware, usersController.edit);
router.put('/edit/:id', upload.single('imageU'), usersController.editput);
router.get('/login',noLoginMiddleware, usersController.login);
router.get('/signup',noLoginMiddleware, usersController.signup);
router.post('/signup', upload.single('imageU'),validateSignupU, imageValid, emailValid, usersController.signuppost);
router.get('/favorites',loginMiddleware, usersController.favorites);
router.post('/login', usersController.loginpost);
router.get('/detail/:id',loginMiddleware, usersController.detail);




module.exports=router;