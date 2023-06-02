const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect");
//find all employees
router.get("/employees",function(req,resp){
   connection.query("select * from employee",(err,data,fields)=>{
    if(err){
        resp.status(500).send("no data found"+JSON.stringify(err));
    }
    else{
        //send the data to ejs and then send the o/p to client
        //it will send data by name empdata to index.ejs which is stroed inside
        //views folder
        resp.render("index",{empdata:data})
    }
   })
})
//display blank form to user
router.get("/displayaddform",(req,resp)=>{
    resp.render("add-emp")

})

//insert new employee record in the databse
router.post("/insertEmployee",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{
            resp.redirect("/employees")
        }
    })
})

//retrieve data of one emp and display it in the form for updation
router.get("/edit/:eid",(req,resp)=>{
    console.log("empid ",req.params.eid)
   connection.query("select * from employee where empid=?",[req.params.eid],(err,data,fields)=>{
    console.log(data);
    if(err){
        resp.status(500).send("data not added"+JSON.stringify(err));
    }else{
        resp.render("update-emp",{emp:data[0]});
    }

   })
})

//update data in the table and go back to /employees

router.post("/updateEmployee",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.ename;
    var sal=req.body.sal;
  connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,result)=>{
    if(err){
        resp.status(500).send("data not added"+JSON.stringify(err));
    }else{
        resp.redirect("/employees")
    }

  })
})
router.get("/delete/:eid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.eid],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }else{
            resp.redirect("/employees")
        }
    })

})



module.exports=router;