function noLoginMiddleware(req,res,next){
    if (req.session.started!==true){
        next();
    }else{
        res.redirect('/home?alert=true');
        
        
    }
}

module.exports=noLoginMiddleware;