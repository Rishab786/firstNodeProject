const express=require("express");
const bodyParser = require('body-parser');
const app=express();
const PORT=8085;
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send(`<html>
    <head> <title> Add Product</title></head>
    <body><form action="/product" method="POST"><input type="text" name="title"><br> <input type="number" name="size"><button type="submit">Add product</button></form></body>
    </html>`)
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    res.send('<h1>hello world</h1>');
});

app.listen(PORT,()=>{
    console.log("server started");
});