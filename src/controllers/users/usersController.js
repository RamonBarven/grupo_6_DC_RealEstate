const { render } = require("ejs");
const fs=require("fs");
const bcrypt=require("bcryptjs");


let usersController={
    login:function (req,res) {
        res.render('user/login', {session:req.session});},
    signup:function (req,res) {
        res.render('user/signUp', {session:req.session});},
    favorites:function (req,res) {
        res.render('user/favoritos', {session:req.session});},    
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
    }, 

    loginpost: function(req, res){
        let datos=fs.readFileSync("data/user.json","utf-8");
        let datosjson=JSON.parse(datos);
        let errors = false;
        let userFind = datosjson.find(function(usuario){
            return usuario.email === req.body.email; 
        });
        if(!userFind){
            errors =true;
        } else {
            let check = bcrypt.compareSync(req.body.password, userFind.password);
            if (check === false) {
                errors = true;
            } else {
                req.session.image = userFind.image;
                req.session.name = userFind.name;
                req.session.lastname = userFind.lastname;
                req.session.email = userFind.email;
                req.session.started = true;
            }
        if (req.body.remember === 'saved') {
                res.cookie('remember',userFind.email, {maxAge: 600000});
            }
        }; 

        if (errors === true) {
            res.render('user/login', {errors:errors});
        } else {
            res.redirect('/home');
        }
        
    }

};

module.exports= usersController;