const { render } = require("ejs");
const fs=require("fs");
const bcrypt=require("bcryptjs");


let usersController={
    login:function (req,res) {
        res.render('user/login');},
    signup:function (req,res) {
        res.render('user/signUp');},
    favorites:function (req,res) {
        res.render('user/favoritos');},    
    signuppost:function(req,res){
        let contraEncripted=bcrypt.hashSync(req.body.password,12);
        let usuarios={         
            id: Date.now(),
            image: req.file.filename,
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            password:contraEncripted,
            };
    
            let datos=fs.readFileSync("data/user.json","utf-8");
            let datosjson=JSON.parse(datos);
            datosjson.push(usuarios);
            let todojson=JSON.stringify(datosjson, null, 4);
            fs.writeFileSync("data/user.json", todojson);
            res.redirect('/home');
    }

};

module.exports= usersController;