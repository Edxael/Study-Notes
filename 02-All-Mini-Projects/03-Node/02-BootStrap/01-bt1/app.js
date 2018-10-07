var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');



app.set('vew enginge', 'ejs');

app.use(express.static(__dirname + '/node_modules/normalize.css'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));



app.get('/', function(req, res){
  res.render('pages/01-index.ejs');
});

app.get('/p2', function(req, res){
  res.render('pages/02-p2.ejs');
});

app.get('/p3', function(req, res){
  res.render('pages/03-p3.ejs');
});

app.get('/p4', function(req, res){
  res.render('pages/04-p4.ejs');
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running....");
});
