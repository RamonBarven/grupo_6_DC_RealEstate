let productController={
    detail:function (req,res) {
        res.render('product/detail')},
    add:function (req,res) {
        res.render('product/addProduct')
    }

};

module.exports= productController;