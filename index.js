const http = require('http');
const express = require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("1st middlware");
    next();

})
app.use((req,res,next)=>{
    console.log("2nd middlware");
    res.send('<h1>Hello World</h1>');

    
})

http.createServer(app).listen(8080); 