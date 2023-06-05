// http

/*

how web works?

computer connected to the internet 
are called clients and servers .

clients are internet-connected devices such as computers or mobile phones along with web-accessing software availble on those devices such as a web browser.

servers on the other hand are computers that store web pages, sites , or apps. 


when you type url -- 

request for the page is sent to the server 
an responce is downloaded and sent by to the client . 
and showed in web browser .

request made by client is not understood by server and responce sent by server is not understood by client. 

that why we need HTTP .
(Hypertext Transfer Protocol)

a ptotocol that defines a format for clients and servers to speak to each other.

the client send an http request and the server responds with an HTTP responce.

(This is how web works at high level).

--------------------------------------------------------------------------------------------

Where node fits in ?

we can create a web server using Node.js 

nodejs has access to operating system functionality like networking. 

node has an event loop to run tasks 
asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests. 

the node server we create should still respect the HTTP format. 

The HTTP module allows creation of web 
servers that can transfer data over HTTP.

import the module 
invoke createServer method
takes callback as argument (HTTP also inherits event emitter class)
req,resp 
callback is nothing but requests listener. when request it will be executed.

---------------------------------------------------------------------------------------

*/

//import the library
const http = require('http');

//create a server
const server = http.createServer(function(request,responce){
    responce.writeHeader(200);
    responce.end("On web...");
});

//This is also Valid way of writing
server.listen(3000,console.log("Server running on 3000 portno"));


const server1 = http.createServer(function(request,responce){
    responce.writeHeader(200);
    responce.end("On web...");
});

server1.listen(3001,()=>{
    console.log("Server running on 3001 portno")
});

//specifying content type 

const server3 = http.createServer(function(request,responce){

    //response.writeHead(statusCode[, statusMessage][, headers]);
    
    responce.writeHead(200,{"Content-Type":"text/plain"});
    responce.end("added content type; which specify the content type to the browser. in netwrok -- header -- responce headers");
});

server3.listen(3002,()=>{
    console.log("server running on 3002 portno");
});


/*
    // Node.js program to demonstrate the
// response.writeHead() Method

// Importing http module
var http = require('http');

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
var httpServer = http.createServer(
		function(request, response){

const body = 'hello world';
	
// Calling response.writeHead method
response.writeHead(200, {
	'Content-Length': Buffer.byteLength(body),
	'Content-Type': 'text/plain'
});
	
response.end(body);
});

// Listening to http Server
httpServer.listen(PORT, () => {
console.log("Server is running at port 3000...");
});

*/
 





