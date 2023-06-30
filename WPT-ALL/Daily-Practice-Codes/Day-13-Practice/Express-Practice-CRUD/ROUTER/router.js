//import
const express = require("express");
const router = express.Router();
const conn = require("../DB/dbConn");

//URL handlers

//get all data
router.get("/products", (req, resp) => {
  conn.query("select * from product", (err, data) => {
    if (err) {
      resp.send("Error Occured in /products!!!!");
    } else {
      resp.send(data);
    }
  });
});

//get from specific id
router.get("/products/:pid", (req, resp) => {
  conn.query(
    "select * from product where pid=?",
    [req.params.pid],
    (err, data) => {
      if (err) {
        resp.send("Error Occured in /products!!!!");
      } else {
        resp.send(data[0]);
      }
    }
  );
});

//delete from data
router.delete("/products/delete/:pid", (req, resp) => {
  conn.query(
    "delete from product where pid=?",
    [req.params.pid],
    (err, data) => {
      if (err) {
        resp.send("Error Occured in delete");
      } else {
        resp.send("Data at Position is Deleted!!!");
      }
    }
  );
});

//Update Data in DB
router.put("/products/update/:pid", (req, resp) => {
  var pid = req.body.pid;
  var price = req.body.price;
  conn.query(
    "update product set price=? where pid=?",
    [price, pid],
    (err, data) => {
      if (err) {
        resp.send("Error Occured in update");
      } else {
        resp.send("Successful Updatation");
      }
    }
  );
});

//insert into product table
router.post("/products/insert", (req, resp) => {
  var pname = req.body.pname;
  var pid = req.body.pid;
  var price = req.body.price;

  conn.query(
    "insert into product values (?,?,?)",
    [pid, pname, price],
    (err, data) => {
      if (err) {
        resp.send("Error Occured in update");
      } else {
        resp.send("Successful Updatation");
      }
    }
  );
});

//exports
module.exports = router;
