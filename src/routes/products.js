let express=require('express');
let router= express.Router();
let productController=require("../controllers/products/productController");

router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.editput);
router.get('/add', productController.add);
router.post('/add', productController.addpost);
router.get('/admin', productController.admin);
router.get('/', productController.list);
router.get('/:id', productController.detail);



module.exports=router;