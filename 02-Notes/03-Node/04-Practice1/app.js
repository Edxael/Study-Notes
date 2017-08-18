var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var User= require('./models/user');


mongoose.connect('mongodb://root:storeDB1@ds127163.mlab.com:27163/ecommerce', function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Conected to DataBase.");
  }
});



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.engine('ejs', ejs_mate);




app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/1', function(req, res){
  res.render('pages/01-one.ejs');
});

app.get('/2', function(req, res){
  res.render('pages/02-two.ejs');
});



// ----- Using Postman ------
app.post('/3', function(req, res){
    // --- Creating form  ----
var user = new User();
    // --- Getting the data from POSTMAN ----
user.profile.name =req.body.name;
user.password = req.body.password;
user.email = req.body.email;
    // ---- Saving data to the DataBase -----
user.save(function(err){
  if(err) {
  return  next(err);
  }else{
    res.json("Success New user created in DataBase.")
  }
});
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up and Runing.....");
  console.log("-");
  console.log("");
});
