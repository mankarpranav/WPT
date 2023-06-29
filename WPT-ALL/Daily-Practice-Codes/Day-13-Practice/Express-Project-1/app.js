//import libraries
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

//add middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(function (req, resp, next) {
  console.log("In Middleware-I");
  next();
});
app.use(function (req, resp, next) {
  console.log("In Middleware-II");
  next();
});

//configure application

//URL handlers
app.get("/home", function (req, resp) {
  resp.send("<h1>This is Home Page!</h1>");
});

app.get("/store", function (req, resp) {
  resp.send("<h1>This is Store Page!</h1>");
});

//Start the Server
app.listen(3002, function () {
  console.log("Listening to Port 3002...");
});
