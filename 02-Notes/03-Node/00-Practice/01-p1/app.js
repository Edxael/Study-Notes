var express = require('express');
var app = express();
var ejs = require('ejs');



app.set('view enegine', 'ejs');


app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
});


app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server Running....");
});
