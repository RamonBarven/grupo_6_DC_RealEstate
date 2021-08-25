function loginMiddleware(req,res,next){
    if (req.session.started===true){
        next();
    }else{
        let alert=true
        res.render('user/login', {alert});
        
    }
}

module.exports=loginMiddleware;