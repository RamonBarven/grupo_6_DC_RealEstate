const path = require('path');

function imageValid(req,res,next){
    if (path.extname(req.file.originalname)===".png" || path.extname(req.file.originalname)===".jpg" || path.extname(req.file.originalname)===".gif" || path.extname(req.file.originalname)===".jpeg"
    ||path.extname(req.file.originalname)===".PNG" || path.extname(req.file.originalname)===".JPG" || path.extname(req.file.originalname)===".GIF" || path.extname(req.file.originalname)===".JPEG"){
        next();
    }else{
        let errorType={img:{
            msg: "File type not accepted "
        }}
        res.render('user/signUp', { errorType, old: req.body });
    }
}


module.exports= imageValid;