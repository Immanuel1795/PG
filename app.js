const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

let users= [];
let rentpaid;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){  
    
    res.render("addtenant");
});

app.post("/", function(req, res){
   
   const user = {
       id: req.body.aNum,
       name : req.body.fName,
       number: req.body.pNo,
       rent: req.body.rent,
       lName: req.body.lName,
       aadhar: req.body.aadhar,
       email: req.body.email,
       haddr: req.body.hAddr,
       wplace:req.body.wName,
       advance: req.body.advance
   };
   users.push(user);
   res.redirect("/tenantInfo");
});


app.get("/tenantinfo", function(req, res){
   res.render("tenantInfo", {users: users, rentpaid: rentpaid});
});

app.post("/tenantinfo", function(req, res){  
    
    
    
        rentpaid = req.body.paid;
        console.log(rentpaid);
    res.redirect("/tenantinfo");
    
    
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});