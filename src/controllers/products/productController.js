const { render } = require("ejs");
const fs=require("fs");
const { Sequelize } = require("../../../database/models");
const db=require("../../../database/models");
const Categories = require("../../../database/models/Category");
const Op= Sequelize.Op;
const { validationResult } = require('express-validator' );




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
        let errors = validationResult(req);

        if (errors.isEmpty()) {
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

        } else {
            res.render('product/addProduct', { errors: errors.mapped(), old: req.body, session:req.session});
        }
        },

    admin: function(req,res) {
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

        let errors = validationResult(req);

        if (errors.isEmpty()) {
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

        } else {
            res.render('product/editProduct', { errors: errors.mapped(), old: req.body, session:req.session, id:req.params.id});
        }
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
    }, 

    search: function(req, res){
        if(req.query.search == 'sale'||req.query.search == 'Sale'){
            db.Products.findAll({
                include: [{association:"Categories"}]
            }
            )
             .then(function(productos){
                 let productsale = productos.filter(function(filtrado){
                     return filtrado.Categories.status == 'sale';
                 })
                 res.render('product/results', {productos: productsale, session:req.session});
             })
        } else if(req.query.search == 'rent'||req.query.search == 'Rent'){
            db.Products.findAll({
                include: [{association:"Categories"}]
            }
            )
             .then(function(productos){
                 let productrent = productos.filter(function(filtrado){
                     return filtrado.Categories.status == 'rent';
                 })
                 res.render('product/results', {productos: productrent, session:req.session});
             })
        } else {
            db.Products.findAll({
                include: ['Categories'],
                where:{
                    [Op.or]: [{location:{[Op.like]:'%'+req.query.search+'%'}}, {description:{[Op.like]:'%'+req.query.search+'%'}}]
                }
            })
            .then(function(productos){
                res.render('product/results', {productos: productos, session:req.session});
            })
        }
        }
        
    };


module.exports= productController;