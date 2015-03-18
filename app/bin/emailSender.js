var nodemailer = require('nodemailer');

var response = {
  status: '',
  data: ''
};

function setResponse(status, info) {
  response.status = status;
  response.data = info;
}

var transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'tofik.mamishov@prestig.pro',
    pass: 'p4nd4r15'
  }
});

function sendMail (recipient, subj, emailBody) {
  var mailOptions = {
    from: 'tofik.mamishov@prestig.pro',
    to: recipient,
    subject: 'prestig.pro - ' + subj,
    html: emailBody
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
}

var sendOrder = function(emailBody) {
  sendMail('mamishov.tofik@gmail.com', 'Новая заявка!', emailBody);
};

var sendComment = function(emailBody) {
  sendMail('mamishov.tofik@gmail.com', 'Новый отзыв!', emailBody);
};

module.exports.sendOrder = sendOrder;
module.exports.sendComment = sendComment;
