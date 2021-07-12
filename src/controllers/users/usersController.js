let usersController={
    login:function (req,res) {
        res.render('login');},
    signup:function (req,res) {
        res.render('signUp');},
    favorites:function (req,res) {
        res.render('favoritos');}    

};

module.exports= usersController;