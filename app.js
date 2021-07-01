const express=require ('express');
const path=require('path');

const app=express();
app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('Servidor corriendo en el puerto 3000');
});

/*app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
} )

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/login.html');
    res.sendFile(htmlPath);
} )*/

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/favoritos.html');
    res.sendFile(htmlPath);
} )