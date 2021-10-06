const { render } = require("ejs");
const fs=require("fs");
const bcrypt=require("bcryptjs");
const { Sequelize } = require("../../../database/models");
const db=require("../../../database/models");
const Op= Sequelize.Op;


let usersController={
    login:function (req,res) {
        res.render('user/login', {session:req.session});},
    signup:function (req,res) {
        res.render('user/signUp', {session:req.session});},
    favorites:function (req,res) {
        res.render('user/favoritos', {session:req.session});},    
    signuppost:function(req,res){
        let contraEncripted=bcrypt.hashSync(req.body.password,12);
        db.Users.create({         
            photo: req.file.filename,
            name:req.body.name,
            lastName:req.body.lastname,
            email:req.body.email,
            password:contraEncripted,
            })
            .then(function(usuario){
                res.redirect('/home');
            }) 
    }, 

    loginpost: function(req, res){

        let errors = false;

        db.Users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuario){
            console.log(usuario);
            let check = bcrypt.compareSync(req.body.password, usuario.password);
            if(check===false){
                errors=true;
                res.render('user/login', {errors:errors});
            } else {
                req.session.image = usuario.photo;
                req.session.name = usuario.name;
                req.session.lastname = usuario.lastName;
                req.session.email = usuario.email;
                req.session.id = usuario.user_id;
                req.session.started = true;
            }
            if (req.body.remember === 'saved') {
                res.cookie('remember',usuario.email, {maxAge: 600000});
            }

            res.redirect('/home');
        })

        .catch(function(errores){
            console.log(errores);
            errors=true;
            res.render('user/login', {errors:errors});
        })
        
        
    },

    detail: function(req, res){
        res.render('user/userDetail', {session:req.session});

    },

    edit: function(req, res){
        res.render('user/editUser', {session:req.session});
    }

};

module.exports= usersController;