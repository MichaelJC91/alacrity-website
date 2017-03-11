const express = require('express');
const expressSanitizer = require('express-sanitizer');
const nodemailer = require('nodemailer');
const router = express.Router();

//Nodemailer transporter
let smtpTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "mcarniato1991@gmail.com",
      pass: "marvel1991"
    }
});

//Nodemailer route

router.post('/mail', function(req, res) {
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

  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
