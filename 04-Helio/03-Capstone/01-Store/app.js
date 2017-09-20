var express = require('express');
var app = express();
var morgan = require('morgan');
var ejs = require('ejs');



app.set('view enginge', 'ejs');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/view'));



app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});

app.get('/1', function(req, res){
  res.render('pages/01-one.ejs');
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("");
  console.log("Server Up and Running");
  console.log("");
  console.log("");
});
