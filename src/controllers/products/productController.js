const { render } = require("ejs");
const fs=require("fs");


let productController={
    detail:function (req,res) {
        res.render('product/detail')},
    add:function (req,res) {
        res.render('product/addProduct')},
    list:function(req,res){
        res.render('product/listProduct')},
    addpost:function(req,res){
        let productos={         
        id:7,
        saleRent:req.body.saleRent,
        price:req.body.price,
        description:req.body.description,
        location:req.body.location,
        sqft:req.body.sqft,
        floors:req.body.floors,
        beds:req.body.beds,
        baths:req.body.baths,
        }

        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        let todojson=JSON.stringify(datosjson.push(productos));
        fs.writeFileSync("data/product.json", todojson);
        console.log(productos);

        res.redirect('/product');
    }
};

module.exports= productController;