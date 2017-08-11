var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');
var bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));



app.get('/', function(req, res){
  res.render('pages/01-index.ejs');
});

app.get('/ad', function(req, res){
  res.render('pages/02-add.ejs');
});

app.get('/sh', function(req, res){
  res.render('pages/03-search.ejs');
});





app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('pages/09-done.ejs', {data: req.body});
});




app.listen(3000, function(err){
  if(err){ throw err; }
  console.log("Server up and running.......");
});
