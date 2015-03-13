var app = require('express')();
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'tofik.mamishov@prestig.pro',
    pass: 'p4nd4r15'
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/assets/images/favicon.ico'));
app.use(serveStatic(__dirname));

app.post('/orders', function(req, res) {
  var emailBody = 'Order from: <b>' + req.body.name + '</b>'
    + '<br/>Phone: ' + req.body.phone
    + '<br/>Email: ' + req.body.email
    + '<br/><br>' + req.body.message;

  var mailOptions = {
    from: 'tofik.mamishov@prestig.pro',
    to: 'mamishov.tofik@gmail.com',
    subject: 'order',
    html: emailBody
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      res.status(505).send(err);
    } else {
      res.send(info.response);
    }
  });
});

server = app.listen(3000, function() {
  return console.log('Server listening at http://localhost:%s', server.address().port);
});
