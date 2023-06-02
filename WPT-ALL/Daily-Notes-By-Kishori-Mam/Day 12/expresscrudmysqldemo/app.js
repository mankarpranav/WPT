//import library
const express=require("express");
const app=express();
var path=require("path")
const bodyparser=require("body-parser");
const routes=require("./router/routers")
//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
//configure the project
//path.join will contenate views folder to current folder
// all ejs files will be serached in views folder
                
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")))
//to find all static css and js folder
app.use("/css",express.static(path.resolve(__dirname,"public/css")))
app.use("/js",express.static(path.resolve(__dirname,"public/js")))
app.use("/image",express.static(path.resolve(__dirname,"public/images")))

//add url handlers
app.use("/",routes)

//start the server
app.listen(3002,function(){
    console.log("server running at port 3002")
})
//this will help to use settings in app in the router
module.exports=app;