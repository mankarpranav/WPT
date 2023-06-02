//import all libraries
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const m1=require("./formexpressmodule");

//add all middlewares
app.use(bodyparser.urlencoded({extended:false}))

//configure the application
//add url handlers
app.get("/form",function(req,resp){
    resp.sendFile("/views/formpost.html",{root:__dirname})

})

app.post("/submit-data",function(req,resp){
   
    if(req.body.btn==="add"){
       var n1=parseInt(req.body.num1);
       var n2=parseInt(req.body.num2);
       var ans=m1.addition(n1,n2)
    //resp.send("<h1>num1: "+req.query.num1+"num2: "+req.query.num2+" Addition : "+ans+"</h1>")
    resp.send(`<h1>num1: ${req.body.num1} num2: ${req.body.num2} Addition : ${ans}</h1>`)
    }
    else{
        var n1=parseInt(req.body.num1);
        var ans=m1.factorial(n1)
        //resp.send("<h1>num1: "+req.query.num1+"num2: "+req.query.num2+" Factorial : "+ans+"</h1>")
        resp.send(`<h1>num1: ${req.body.num1} Factorial : ${ans}</h1>`) 
    }
})
//start the server
app.listen(3002,function(){
    console.log("running at port 3002")
})