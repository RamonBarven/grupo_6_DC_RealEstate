const express=require ('express');
const path=require('path');
const app=express();

const session = require('express-session');

app.use(express.static('../public'));

const mainRoute=require("./routes/main");
const productRoute=require("./routes/products");
const usersRoute=require("./routes/user");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session( {secret:"Es un secreto de ..."}));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use('/',mainRoute);
app.use('/product',productRoute);
app.use('/user',usersRoute);

app.listen(3030,()=>{
    console.log('Servidor corriendo en el puerto 3030');
});








