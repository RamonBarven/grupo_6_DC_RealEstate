const { render } = require("ejs");
const fs=require("fs");
const db=require("../../../database/models");



let productController={
    detail:function(req,res){
        let id = req.params.id;
        db.Products.findByPk(id,{
            include: [{association:"Categories"}]
        }
            )
        .then(function(producto){
            res.render('product/detail', {producto:producto, session:req.session});
        })
    },
    add:function (req,res) {
        res.render('product/addProduct', {session:req.session})},
    list:function(req, res) {
        db.Products.findAll({
            include: [{association:"Categories"}]
        }
        )
         .then(function(productos){
             res.render('product/listProduct', {productos: productos, session:req.session});
         })
 
     },
    addpost:function(req,res){
        db.Products.create({ 
            image:req.file.filename,
            category_id:req.body.category,
            price:req.body.price,
            description:req.body.description,
            location:req.body.location,
            sqft:req.body.sqft,
            floors:req.body.floors,
            beds:req.body.beds,
            baths:req.body.baths,
        })
        .then(function(productos){
            res.redirect('/product');
        })
    },

    admin: function(req, res) {
       db.Products.findAll({
           include: [{association:"Categories"}]
       }
       )
        .then(function(productos){
            res.render('product/adminProduct', {productos: productos, session:req.session});
        })

    },

    edit: function(req,res){
        let id = req.params.id;
        db.Products.findByPk(id)
        .then(function(producto){
            res.render('product/editProduct', {producto:producto, id: id, session:req.session});
        })
    },

    editput: function(req,res){

        db.Products.update({ 
            image:req.file.filename,
            category_id:req.body.category,
            price:req.body.price,
            description:req.body.description,
            location:req.body.location,
            sqft:req.body.sqft,
            floors:req.body.floors,
            beds:req.body.beds,
            baths:req.body.baths,
        }, {
            where:{
                product_id:req.params.id
            }
        })
        .then(producto=>{
            res.redirect('/product/admin');
        })
    },

    delete: function(req,res){
        db.Favorites.destroy({
            where:{
                product_id:req.body.invisible } ,            
           
        })
        db.Products.destroy({
            where:{
                product_id:req.body.invisible } ,            
               
            }) 
        
        .then(producto=>{
            res.redirect('/product/admin');
        })
        .catch(err=>{
            return res.send(err)
        })
    }
};

module.exports= productController;