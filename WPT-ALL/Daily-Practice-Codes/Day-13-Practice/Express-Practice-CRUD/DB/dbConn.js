//import mysql
const mysql = require("mysql");

//create connection
var mysqlconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "Express",
  port: 3306,
});

//connect
mysqlconnection.connect((err) => {
  if (err) {
    console.log("Error Occured in connect of db!!!");
  } else {
    console.log("Connection Established Successfully!!!");
  }
});

//export connection
module.exports = mysqlconnection;
