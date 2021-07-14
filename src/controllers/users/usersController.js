let usersController={
    login:function (req,res) {
        res.render('user/login');},
    signup:function (req,res) {
        res.render('user/signUp');},
    favorites:function (req,res) {
        res.render('user/favoritos');}    

};

module.exports= usersController;