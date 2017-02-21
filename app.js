const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//Required Routes
const indexRoutes = require('./routes/contact/contact');

//Set Static Folders
app.use(express.static(__dirname + '/static'));

//Express Sanitizer Middleware
app.use(expressSanitizer());

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//View Engine
app.set('view engine', 'ejs');

// Root Route
app.get('/', function(req, res) {
  res.render('index');
});

// About Route
app.get('/about', function(req, res) {
  res.render('about');
})


//Use Required Routes
app.use(indexRoutes);

//Listen on port 8080
app.listen(8080, function() {
  console.log("App Running");
});
