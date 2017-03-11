const express = require('express');
const expressSanitizer = require('express-sanitizer');
const nodemailer = require('nodemailer');
const router = express.Router();

//Nodemailer transporter
let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "mcarniato1991@gmail.com",
      pass: process.env.GOOGLE_PASSWORD
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
      from: email + '<' + process.env.GOOGLE_EMAIL + '>', // sender address
      to: process.env.GOOGLE_BUSINESS_EMAIL, // list of receivers
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
