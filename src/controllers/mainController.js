let mainController={
    index:function (req,res) {
        res.render("index", {session:req.session, error:req.query.alert});}

}

module.exports= mainController;