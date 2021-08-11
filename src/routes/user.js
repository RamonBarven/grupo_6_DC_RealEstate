let express=require('express');
let router= express.Router();
const multer = require('multer');
const path = require('path')
let usersController=require("../controllers/users/usersController");

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

router.get('/login', usersController.login);
router.get('/signup', usersController.signup);
router.post('/signup', upload.single('imageU'), usersController.signuppost);
router.get('/favorites', usersController.favorites);


module.exports=router;