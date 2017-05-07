const express = require('express');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const api_key = 'key-ed58d439fc530dab94c264ad28c277b9';
const domain = 'alacritywebdevelopment.com.au';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

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

    console.log(res.status());

    //Send Messages
    mailgun.messages().send(mailOptions, function (error, body) {
      console.log(body);
    });
  }
});

module.exports = router;
