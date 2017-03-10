const express = require('express');
const expressSanitizer = require('express-sanitizer');
const nodemailer = require('nodemailer');
const router = express.Router();

//Nodemailer transporter
let smtpTransporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
      XOAuth2: {
        user: "mcarniato1991@gmail.com",
        clientId: "873405719370-8k43d4bqser0v8e1lon7s5pfm1le8pc2.apps.googleusercontent.com",
        clientSecret: "p2mRp7oX2ZtAu_GYYqbBtfTf",
        refreshToken: "1/qVMi33HK64i8yBSZoUQ93fLF_1RQmusy5PPEUzBlASJQZre9w4oSr9A92O8ssWp2"
      }
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
    smtpTransporter.close();
  });
});

module.exports = router;
