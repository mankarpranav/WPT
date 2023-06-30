//import libraries
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./ROUTER/router");

//add middlewares
app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use("/", router);

//start the server
app.listen(3002, function () {
  console.log("Server Listening to port 3002...");
});
