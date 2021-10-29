const { render } = require("ejs");
const fs=require("fs");
const bcrypt=require("bcryptjs");
const { Sequelize } = require("../../../database/models");
const db=require("../../../database/models");
const Op= Sequelize.Op;
const { validationResult } = require('express-validator' );


let usersController={
    login:function (req,res) {
        res.render('user/login', {session:req.session});},
    signup:function (req,res) {
        res.render('user/signUp', {session:req.session});},
    favorites:function (req,res) {
        res.render('user/favoritos', {session:req.session});},    
    signuppost:function(req,res){
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let contraEncripted=bcrypt.hashSync(req.body.password,12);
            db.Users.create({         
                photo: req.file.filename,
                name:req.body.name,
                lastName:req.body.lastname,
                email:req.body.email,
                password:contraEncripted,
                type_id: req.body.category
                })
            .then(function(usuario){
                req.session.image = usuario.photo;
                req.session.name = usuario.name;
                req.session.lastname = usuario.lastName;
                req.session.email = usuario.email;
                req.session.numero = usuario.user_id;
                req.session.type = usuario.type_id;
                req.session.started = true;
                res.redirect('/home');
            }) 
        } else {
            res.render('user/signUp', { errors: errors.mapped(), old: req.body });
        }
        
    }, 

    loginpost: function(req, res){

        let errors = false;

        db.Users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuario){
            let check = bcrypt.compareSync(req.body.password, usuario.password);
            if(check===false){
                errors=true;
                res.render('user/login', {errors:errors});
            } else {
                req.session.image = usuario.photo;
                req.session.name = usuario.name;
                req.session.lastname = usuario.lastName;
                req.session.email = usuario.email;
                req.session.numero = usuario.user_id;
                req.session.type = usuario.type_id;
                req.session.started = true;
                console.log(req.session)
            }
            if (req.body.remember === 'saved') {
                res.cookie('remember',usuario.email, {maxAge: 600000});
            }

            res.redirect('/home');
        })

        .catch(function(errores){
            errors=true;
            res.render('user/login', {errors:errors});
        })
        
        
    },

    detail: function(req, res){
        res.render('user/userDetail', {session:req.session});

    },

    detailpost:function(req,res){
        req.session.image = null ;
        req.session.name = null ;
        req.session.lastname = null ;
        req.session.email = null ;
        req.session.numero = null ;
        req.session.type = null ;
        req.session.started = false;
        res.redirect('/home');
    },

    edit: function(req, res){
        res.render('user/editUser', {session:req.session});
    },

    editput: function(req,res){
        let contraEncripted=bcrypt.hashSync(req.body.password,12);
        db.Users.update({ 
           photo: req.file.filename,
           name: req.body.name,
           lastName: req.body.lastname,
           email: req.body.email,
           password: contraEncripted
        }, {
            where:{
                user_id:req.session.numero
            }
        })
        .then(usuario=>{
            req.session.image=req.file.filename;
            req.session.name=req.body.name;
            req.session.lastname=req.body.lastname;
            req.session.email=req.body.email;
            res.redirect('/user/detail/'+req.session.numero);
        })
    }

};

module.exports= usersController;