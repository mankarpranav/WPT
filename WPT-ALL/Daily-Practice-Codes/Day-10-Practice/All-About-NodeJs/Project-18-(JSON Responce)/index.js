//send back JSON object as responce

const http = require("http");

const server = http.createServer((req,resp)=>{
    const superHero ={
        firstName : "Pranav",
        lastName : "Mankar"
    };

    // resp.writeHead(200,{"Content-Type":"text/html"});

    resp.writeHead(200,{"Content-Type":"xyz:JSON"});    //content type
    resp.end(JSON.stringify(superHero));                //converting String
    
});

server.listen(3001,()=>{
  console.log("server started at 3001 port");  
});

//would be surprice to know that you have written your first API using node.

















