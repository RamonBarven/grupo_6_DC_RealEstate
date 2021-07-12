
app.get('/productdetail', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/detalleProducto.html');
    res.sendFile(htmlPath);
} ) 