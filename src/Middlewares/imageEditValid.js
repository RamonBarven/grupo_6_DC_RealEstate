const path = require('path');

function imageEditValid(req,res,next){
    if (path.extname(req.file.originalname)===".png" || path.extname(req.file.originalname)===".jpg" || path.extname(req.file.originalname)===".gif" || path.extname(req.file.originalname)===".jpeg"
    ||path.extname(req.file.originalname)===".PNG" || path.extname(req.file.originalname)===".JPG" || path.extname(req.file.originalname)===".GIF" || path.extname(req.file.originalname)===".JPEG"){
        next();
    }else{
        let errors={img:{
            msg: "File type not accepted "
        }}
        res.render('product/editProduct', { errors, old: req.body, session:req.session, id:req.params.id });
    }
}


module.exports= imageEditValid;