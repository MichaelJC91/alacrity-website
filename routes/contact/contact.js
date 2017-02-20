const express = require('express');
const expressSanitizer = require('express-sanitizer');
const nodemailer = require('nodemailer');
const router = express.Router();

//Nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_EMAIL,
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
    phoneNumber: reqBody.phone = sanitizer(reqBody.phone),
    subject: reqBody.subject = sanitizer(reqBody.subject),
    message: reqBody.message = sanitizer(reqBody.message)
  }

  let { name, email, phoneNumber, subject, message } = contactFormData;

  let mailOptions = {
      from: email + '<' + process.env.GOOGLE_EMAIL + '>', // sender address
      to: process.env.GOOGLE_BUSINESS_EMAIL, // list of receivers
      subject, // Subject line
      html: `From: ${ name }<br>
             Email: ${ email }<br>
             Phone: ${ phoneNumber }<br><br>
             Message: ${ message }`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.redirect('/');
    }
    
  });
});

module.exports = router;
