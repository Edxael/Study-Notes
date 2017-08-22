var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');




app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));





app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/1', function(req, res){
  res.render('pages/01-p.ejs');
});

app.get('/2', function(req, res){
  res.render('pages/02-p.ejs');
});

app.get('/3', function(req, res){
  res.render('pages/03-p.ejs');
});

app.get('/4', function(req, res){
  res.render('pages/04-p.ejs');
});

app.get('/5', function(req, res){
  res.render('pages/05-p.ejs');
});

app.get('/6', function(req, res){
  res.render('pages/06-p.ejs');
});

app.get('/7', function(req, res){
  res.render('pages/07-p.ejs');
});

app.get('/8', function(req, res){
  res.render('pages/08-p.ejs');
});

app.get('/9', function(req, res){
  res.render('pages/09-p.ejs');
});

app.get('/10', function(req, res){
  res.render('pages/10-p.ejs');
});

app.get('/11', function(req, res){
  res.render('pages/11-p.ejs');
});

app.get('/12', function(req, res){
  res.render('pages/12-p.ejs');
});





app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Up & Running.....");
});
