const http = require('http');
const reqHandler=require('./routes');

const { error } = require('console');

http.createServer(reqHandler).listen(8080); 