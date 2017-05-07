const express = require('express');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const sendmail = require('sendmail')();

//Mailer route

router.post('/mail', (req, res) => {
  const reqBody = req.body;
  const sanitizer = req.sanitize;

  let contactFormData = {
    name: reqBody.name = sanitizer(reqBody.name),
    email: reqBody.email = sanitizer(reqBody.email),
    phone: reqBody.phone = sanitizer(reqBody.phone),
    subject: reqBody.subject = sanitizer(reqBody.subject),
    message: reqBody.message = sanitizer(reqBody.message)
  }

  let { name, email, phone, subject, message } = contactFormData;

  let mailOptions = {
      from: email + '<' + "mcarniato1991@gmail.com" + '>', // sender address
      to: 'michael@alacritywebdev.com.au', // list of receivers
      subject, // Subject line
      html: `From: ${ name }<br>
             Email: ${ email }<br>
             Phone: ${ phone }<br><br>
             Message: ${ message }`
  };

  sendmail(mailOptions, function(err, reply) {
      if(err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
  });
});

module.exports = router;
