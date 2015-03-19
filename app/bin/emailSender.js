var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'tofik.mamishov@prestig.pro',
    pass: 'p4nd4r15'
  }
});

function sendMail (recipient, subj, emailBody, res) {
  var mailOptions = {
    from: 'tofik.mamishov@prestig.pro',
    to: recipient,
    subject: 'prestig.pro - ' + subj,
    html: emailBody
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  });
}

var sendOrder = function(emailBody, res) {
  sendMail('mamishov.tofik@gmail.com', 'Новая заявка!', emailBody, res);
};

var sendComment = function(emailBody, res) {
  sendMail('mamishov.tofik@gmail.com', 'Новый отзыв!', emailBody, res);
};

module.exports.sendOrder = sendOrder;
module.exports.sendComment = sendComment;
