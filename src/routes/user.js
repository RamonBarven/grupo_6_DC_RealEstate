app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/login.html');
    res.sendFile(htmlPath);
} )

app.get('/favorites', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/favoritos.html');
    res.sendFile(htmlPath);
} )

app.get('/signup', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/signUp.html');
    res.sendFile(htmlPath);
} ) 