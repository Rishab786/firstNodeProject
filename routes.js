const fs= require('fs');
function reqHandler(req,res){
const url=req.url;
const method=req.method;
if(url ==='/' ){
fs.readFile('text.txt','utf-8',(error,data)=>{
res.write(data);
return res.end();

})

res.write('<html>');
res.write('<head><title>Node Project</title></head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Add</button></form></body>');
res.write('</html>');
}
if(url==='/message' &&  method==='POST'){
const body=[];
req.on('data',(chunk)=>{
    body.push(chunk);
});
req.on('end',()=>{
    const parsedBody = Buffer.concat(body).toString();
    const message=parsedBody.split('=')[1];
    fs.writeFileSync('text.txt',message);
    res.writeHead(302, { Location: "http://" + req.headers["host"] + "/" });
    return res.end();
    

})
}
}
module.exports=reqHandler;