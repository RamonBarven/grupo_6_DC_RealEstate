function rememberMeMiddleware (req, res, next) {
    next();
    if (req.cookies.remember != undefined && req.session.started != true) {
        let datos=fs.readFileSync("data/user.json","utf-8");
        let datosjson=JSON.parse(datos);
        let userFind = datosjson.find(function(usuario){
            return usuario.email === req.body.email; 
        });
        if(userFind){
                req.session.image = userFind.image;
                req.session.name = userFind.name;
                req.session.lastname = userFind.lastname;
                req.session.email = userFind.email;
                req.session.started = true;;
        }
    } 
}

module.exports = rememberMeMiddleware;