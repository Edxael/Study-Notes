    // ---- Requiring dependencies ----
var express = require('express');
var app = express();
var ejs = require('ejs');
var ejs_mate = require('ejs-mate');
var mongoose = require('mongoose');
var morgan = require('morgan');



    // ---- Middle-Ware ----
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));



    // ---- Page Routes ----
app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/p1', function(req, res){
  res.render('pages/01-p1.ejs');
});

app.get('/p2', function(req, res){
  res.render('pages/02-p2.ejs');
});

app.get('/p3', function(req, res){
  res.render('pages/03-p3.ejs');
});




    // ---- Server Listener ----
app.listen((process.env.PORT || 5000), function(err){
  if(err){ throw err; }
  console.log("App Server Up & Running....");
});
