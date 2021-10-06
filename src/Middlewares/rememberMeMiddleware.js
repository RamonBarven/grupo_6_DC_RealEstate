const { Sequelize } = require("../../database/models");
const db=require("../../database/models");
function rememberMeMiddleware (req, res, next) {

    if (req.cookies.remember != undefined && req.session.started != true) {
        db.Users.findOne({
            where:{
                email:req.cookies.remember
            }
        }).then(function(usuario){
            next();
            console.log(usuario);
                req.session.image = usuario.photo;
                req.session.name = usuario.name;
                req.session.lastname = usuario.lastName;
                req.session.email = usuario.email;
                req.session.id = usuario.user_id;
                req.session.started = true; 
        })
        .catch(function (error){
            next();
        })
        
    } else {
        next();
    }
}

module.exports = rememberMeMiddleware;