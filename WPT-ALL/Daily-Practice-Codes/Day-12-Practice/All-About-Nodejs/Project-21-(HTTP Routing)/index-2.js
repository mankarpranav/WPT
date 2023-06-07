//HOW TO ROUTE DIFFERENT REQUESTS TO DIFFERENT RESPONCES

//ROUTING USING if-else

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  //resp.end(req.url);        // prints '/' means root (query string)

  if (req.url === "/") {
    resp.writeHeader(200, { "content-type": "text/plain" });
    resp.end("Home Page");

  } else if (req.url === "/aboutus") {
    resp.writeHeader(200, { "content-type": "text/plain" });
    resp.end("About us");

  } else if (req.url === "/api") {
    resp.writeHeader(200, { "content-type": "application/json" });
    resp.end(JSON.stringify({ firstName: "Anuj", lastName: "Bhamare" }));
    
  } else {
    resp.writeHeader(200, { "content-type": "text/plain" });
    resp.end("Invalid Input!");
  }
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
