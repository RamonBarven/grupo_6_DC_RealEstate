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
        let id = req.params.id-1;
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        res.render('product/listProduct', {datosjson: datosjson, id: id})
    },
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
        };

        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        datosjson.push(productos);
        let todojson=JSON.stringify(datosjson, null, 4);
        fs.writeFileSync("data/product.json", todojson);
        res.redirect('/product');
    },

    admin: function(req, res) {
        let id = req.params.id-1;
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        res.render('product/adminProduct', {datosjson: datosjson, id: id});
    },

    edit: function(req,res){
        let id = req.params.id-1;
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        res.render('product/editProduct', {datosjson: datosjson, id: id});
    },

    editput: function(req,res){
        let id = req.params.id;
        console.log(req.params.id);
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        datosjson[id].image=req.body.image;
        datosjson[id].category=req.body.category;
        datosjson[id].price=req.body.price;
        datosjson[id].description=req.body.description;
        datosjson[id].location=req.body.location;
        datosjson[id].floors=req.body.floors;
        datosjson[id].sqft=req.body.sqft;
        datosjson[id].baths=req.body.baths;
        datosjson[id].beds=req.body.beds;
        let todojson=JSON.stringify(datosjson, null, 4);
        fs.writeFileSync("data/product.json", todojson);
        res.redirect('/product/admin');
    },

    delete: function(req,res){
        let datos=fs.readFileSync("data/product.json","utf-8");
        let datosjson=JSON.parse(datos);
        let id=parseInt(req.body.invisible);
        let borrar=datosjson.filter(function(elemento){
            return elemento.id!==id;
        })
        let todojson=JSON.stringify(borrar, null, 4);
        fs.writeFileSync("data/product.json", todojson);
        res.redirect('/product/admin');
    }
};

module.exports= productController;