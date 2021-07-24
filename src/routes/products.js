let express=require('express');
let router= express.Router();
let productController=require("../controllers/products/productController");

router.get('/:id', productController.detail);
router.get('/', productController.list);
router.get('/add', productController.add);
router.post('/add', productController.addpost);
module.exports=router;