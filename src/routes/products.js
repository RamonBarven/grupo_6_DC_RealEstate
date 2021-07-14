let express=require('express');
let router= express.Router();
let productController=require("../controllers/products/productController");

router.get('/detail', productController.detail);
router.get('/add', productController.add);

module.exports=router;