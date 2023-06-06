//HOW TO ROUTE DIFFERENT REQUESTS TO DIFFERENT RESPONCES

//req.url gives us the query string
//http module gives us access to request object
//which interns gives access to the url property (req.url)
//also req.method gives access to http method such as GET POST PUT DELETE which
//we can route different requests.
//using combination of req.method and req.url can help us to route any type of request.
//typically in real world we will depend on web framework to handle this.

//writeHeader() vs write()
// write() writes to the stream
// eg.,
// resp.write(<h1>This is Header</h1>);

// whereas writeHeader() has properties to define
// eg.,
//     resp.writeHeader(200,{"content-type":"text/plain"});

//Solution below is Half-wrong as we will convert url into object
//and then we will perform operations
//------------------------------------------------------------------------------------

//import libraries
const http = require("http");
const url = require("url");

//create server
const server = http.createServer((req, resp) => {
  var op = req.url;

  console.log(req.url);
  console.log(req.method);

  resp.writeHeader(200, { "content-type": "text/html" });
  switch (op) {
    case "/":
      console.log("root page");
      break;

    case "/aboutus":
      console.log("about us");
      break;

    case "/shop":
      console.log("shop page");
      break;

    case "/home":
      console.log("home page");
      break;
  }
  resp.end();
});

//listen to server
server.listen(3002, () => {
  console.log("server started at port 3002...");
});
