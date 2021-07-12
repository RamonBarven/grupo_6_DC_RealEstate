const express=require ('express');
const path=require('path');

const app=express();
app.use(express.static('../public'));
const mainRoute=require("./routes/main");
const productRoute=require("./routes/products");
const usersRoute=require("./routes/user");
app.set("view engine", "ejs");

app.listen(3030,()=>{
    console.log('Servidor corriendo en el puerto 3030');
});

app.use('/',mainRoute);
app.use('/product',productRoute);
app.use('/user',usersRoute);








