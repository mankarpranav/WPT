const mysql=require("mysql");

//create connection
var mysqlconnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root123',
    database:'test',
    port:3306
});
mysqlconnection.connect((err)=>{
    if(err){
        console.log("connection failed"+JSON.stringify(err));
    }
    else{
        console.log("connection done successfully");
    }
})

module.exports=mysqlconnection;