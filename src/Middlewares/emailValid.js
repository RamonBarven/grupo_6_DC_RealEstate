const { Sequelize } = require("../../database/models");
const db=require("../../database/models");
const Op= Sequelize.Op;

function emailValid(req,res,next){
    db.Users.findAll({
        where:{
            email:req.body.email
        }
    })
    .then(function(emails){
        console.log(emails)
        if(emails.length>0){
            let errors={
                email:{
                    msg:"This email already exists"
                }
            }
            res.render('user/signUp', { errors, old: req.body });
        }else{
            next();
        }
    
    })
}


module.exports= emailValid;