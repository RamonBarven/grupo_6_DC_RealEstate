const { render } = require("ejs");

let productController={
    detail:function (req,res) {
        res.render('product/detail')},
    add:function (req,res) {
        res.render('product/addProduct')},
    list:function(req,res){
        res.render('product/listProduct')}

};

module.exports= productController;