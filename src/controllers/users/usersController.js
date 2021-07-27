const { render } = require("ejs");
const fs=require("fs");

let usersController={
    login:function (req,res) {
        res.render('user/login');},
    signup:function (req,res) {
        res.render('user/signUp');},
    favorites:function (req,res) {
        res.render('user/favoritos');},    
    signuppost:function(req,res){
        let usuarios={         
            id: Date.now(),
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
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