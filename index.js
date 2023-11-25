const http = require('http');
const PORT=3000;
const server = http.createServer(function (req,res){
    console.log('hello World');

});
server.listen(PORT);
       
      
