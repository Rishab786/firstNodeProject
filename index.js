const http = require('http');
const PORT=3003;
const server = http.createServer(function (req,res){
    if(req.url==='/home')
    {
        res.write(' Welcome home');
    }
    else if(req.url==='/about')
    {
        res.write('Welcome to About Us page');
    }
    else if(req.url==='/node')
    {
        res.write(' Welcome to my Node Js project');
    }

});
server.listen(PORT);
       
      
