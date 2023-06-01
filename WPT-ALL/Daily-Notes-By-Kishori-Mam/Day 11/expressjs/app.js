//import libraries
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
//write middlewares
//to parse data and url received from req
app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req,resp,next){
    console.log("in middleware 1")
    next(); //send the request to next middleware
})
app.use(function(req,resp,next){
    console.log("in middleware 2")
     next()
})
//cofigure application

//add url handlers
app.get("/home",function(req,resp){
    resp.send("<h1>In home url</h1>")
});
app.get("/aboutus", function(req,resp){
    resp.send("<h1>In aboutus url</h1>")
});

//start the server
app.listen(3002, function(){
    console.log("server is running at port 3002")
})