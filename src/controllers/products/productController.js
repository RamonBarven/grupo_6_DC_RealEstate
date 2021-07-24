const { render } = require("ejs");
const fs=require("fs");


let productController={
    detail:function (req,res) {
        let id = req.params.id-1;
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        res.render('product/detail', {datosjson: datosjson, id: id}); 
    },
    add:function (req,res) {
        res.render('product/addProduct')},
    list:function(req,res){
        res.render('product/listProduct')},
    addpost:function(req,res){
        let productos={         
        id: Date.now(),
        image:req.body.image,
        category:req.body.category,
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
        datosjson.push(productos);
        let todojson=JSON.stringify(datosjson, null, 4);
        fs.writeFileSync("data/product.json", todojson);
        res.redirect('/product');
    }
};

module.exports= productController;