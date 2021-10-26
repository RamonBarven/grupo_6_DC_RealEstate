let express=require('express');
let router= express.Router();
let apiController=require("../controllers/apis/apiController");

router.get('/users', apiController.list);
router.get('/users/:id', apiController.detailUser);
router.get('/products', apiController.products);
router.get('/products/:id', apiController.detailProduct);

module.exports=router;