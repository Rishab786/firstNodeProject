const express = require('express');
const router = express.Router();
router.get('/add-product',(req,res,next)=>{
    res.send(`<html>
    <head> <title> Add Product</title></head>
    <body><form action="/admin/product" method="POST"><input type="text" name="title"><br> <input type="number" name="size"><button type="submit">Add product</button></form></body>
    </html>`)
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;