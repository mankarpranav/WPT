//HTML Responce

const http = require('http');

const server = http.createServer((req,resp)=>{

    //this will show plain text 
    // resp.writeHead(200,{"Content-Type":"text/plain"});
    // resp.end("<h1>Header</h1>");


    //this will show proper h1 tag with 
    //content
    resp.writeHead(200,{"Content-Type":"text/html"});
    resp.end("<h1>Header</h1>");

});
 
server.listen(3003,()=>{
    console.log("Server started at 3003 port");
});

//but, we dont want to write html code here in js file 
//and send it back as responce from here.
//for that we will write html file and send it back as responce. refer next project