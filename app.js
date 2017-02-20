const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

//Set Static Folders
app.use(express.static(__dirname + '/static'));

//Express Sanitizer Middleware
app.use(expressSanitizer());

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//View Engine
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});

//Nodemailer transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD
    }
});

//Nodemailer route
app.post('/mail', function(req, res) {
  const reqBody = req.body;
  const sanitizer = req.sanitize;
  let contactFormData = {
    name: reqBody.name = sanitizer(reqBody.name),
    email: reqBody.email,
    phoneNumber: reqBody.phone,
    subject: reqBody.subject,
    message: reqBody.message
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

})

app.listen(8080, function() {
  console.log("App Running");
});
