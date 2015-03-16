var app = require('express')();
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var emailSender = require('./emailSender.js');
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/assets/images/favicon.ico'));
app.set('view engine', 'jade');
app.set('views', __dirname );

app.get('/', function(req, res) {
  var logos = [];
  fs.readdir(__dirname + '/assets/images/logos', function (err, files) {
    if (err) {
      console.log(err);
    } else {
      logos = files;
    }
  });
  console.log(logos);
  res.render('index', {logos: logos});
});

app.get('/assets/:dir/:file', function(req, res) {
  var dir = req.params.dir
    , file = req.params.file;
  res.sendFile(__dirname + '/assets/' + dir + '/' + file, function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.post('/orders', function(req, res) {
  var emailBody = 'Имя клиента: <b>' + req.body.name + '</b>'
    + '<br/>Телефон: ' + req.body.phone
    + '<br/>E-mail: ' + req.body.email
    + '<br/><br>' + req.body.message;

  emailSender.sendOrder(emailBody);
  res.send("OK");
});

app.post('/comments', function(req, res) {
  var emailBody = 'Имя клиента: <b>' + req.body.name + '</b>'
    + '<br/>Телефон: ' + req.body.phone
    + '<br/>E-mail: ' + req.body.email
    + '<br/><br>' + req.body.message;

  emailSender.sendComment(emailBody);
  res.send("OK");
});

app.listen(app.get('port'), function() {
  return console.log('%s:%s', (process.env.address || 'localhost'), app.get('port'));
});
