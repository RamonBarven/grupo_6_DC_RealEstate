const express=require('express');
const router= express.Router();
const multer = require('multer');
const path = require('path')
const productController=require("../controllers/products/productController");
let addProductValid=require('../Middlewares/addProductValid');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        let rutaImage=path.join(__dirname+'../../../public/product/img/uploads');
        cb(null, rutaImage);
    },
    filename: function(req, file, cb){
        let name = 'productImage-'+ Date.now()+path.extname(file.originalname);
        cb(null, name);
    }
});

let upload = multer({storage: storage});


router.get('/edit/:id', productController.edit);
router.put('/edit/:id', upload.single('image'), productController.editput);
router.get('/add', productController.add);
router.post('/add', upload.single('image'),addProductValid, productController.addpost);
router.get('/admin', productController.admin);
router.delete('/admin', productController.delete);
router.get('/results?', productController.search);
router.get('/', productController.list);
router.get('/:id', productController.detail);




module.exports=router;