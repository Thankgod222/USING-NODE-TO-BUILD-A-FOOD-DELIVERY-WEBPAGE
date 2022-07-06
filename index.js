 const express = require('express')
 const ejs = require('ejs');
 const bodyParser = require('body-parser');
 const mysql = require('mysql')

 mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"product_laravel" 
 })
  



 const app = express(); 

 app.use(express.static('public'));
 app.set('view engine', 'ejs');

 app.listen(8080); 
 app.use(bodyParser.urlencoded({extended:true}));


 //localhost:8080
 app.get('/', function(req,res) {

    const con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node_project" 
     })

     con.query("SELECT * FROM products",(err,result)=>{

        res.render('pages/index', {result:result});

     })

    
 }) ;