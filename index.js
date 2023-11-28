const express=require("express");
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app=express();
const PORT=8085;
app.use(bodyParser.urlencoded({extended:false}));
app.use("/admin",adminRouter);
app.use('/shop',shopRouter);
app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
})
app.listen(PORT,()=>{
    console.log("server started");
});