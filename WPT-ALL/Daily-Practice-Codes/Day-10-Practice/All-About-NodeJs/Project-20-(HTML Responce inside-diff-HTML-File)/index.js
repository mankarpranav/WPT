//HTML Responce using Streams 

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,resp)=>{
    
    resp.writeHead(200,{"Content-Type":"text/html"});

    fs.createReadStream("./index.html").pipe(resp);
    //can also be done using sync but it would stop for whole file to 
    //load thus using stream so that data can be read and transfer in chunks.
});

server.listen(3004,()=>{
    console.log("Server started at 3004 port...");
});