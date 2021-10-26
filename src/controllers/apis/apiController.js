const { name } = require("ejs");
const fs=require("fs");
const { Sequelize } = require("../../../database/models");
const db=require("../../../database/models");
const Op= Sequelize.Op;

module.exports={
    list:(req, res)=>{
        db.Users
            .findAll()
            .then(usuarios=>{
                let lista=[];
                usuarios.forEach(user => {
                    lista.push({
                        id:user.user_id,
                        name:user.name,
                        email:user.email,
                        detail:"localhost:3030/api/users/"+ user.user_id
                        })
                    });
                return res.status(200).json({
                    count:usuarios.length,
                    users:lista,
                    status:200
                })
            })
    },
    detailUser:(req,res)=>{
        db.Users
            .findByPk(req.params.id)
            .then(usuario=>{
                return res.status(200).json({
                    id:usuario.user_id,
                    name:usuario.name,
                    lastname:usuario.lastName,
                    email:usuario.email,
                    image:usuario.photo
                })
            })

    } ,

    products:(req,res)=>{
        db.Products
        .findAll({
            include:["Categories"]            
        })
        .then(productos=>{
            let saleFilter=productos.filter(function(producto){
                return producto.Categories.status=="sale"   
            })
            let rentFilter=productos.filter(function(producto){
                return producto.Categories.status=="rent"   
            })

            let lista=[];
            productos.forEach(producto => {
                lista.push({
                    id:producto.product_id,
                    location:producto.location,
                    description:producto.description,
                    categories:producto.Categories,
                    detail:"localhost:3030/api/products/"+ producto.product_id
                    })
                });

            return res.status(200).json({
                count:productos.length,
                countByCategory:{
                    sale:saleFilter.length,
                    rent:rentFilter.length
                },
                products: lista,
                status:200
            })
        })
    },

    detailProduct:(req,res)=>{
        db.Products
        .findByPk(req.params.id, {include:["Categories"]})
        .then(producto=>{
            return res.status(200).json({
                id:producto.product_id,
                location:producto.location,
                description:producto.description,
                price:producto.price,
                category:producto.Categories,
                sqft:producto.sqft,
                floors:producto.floors,
                beds:producto.beds,
                baths:producto.baths,
                image: producto.image,
                status:200
            })

        })
    }
}