const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');

//Required Routes
const indexRoutes = require('./routes/contact/contact');

//Set Static Folders
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/dist'));

//Express Sanitizer Middleware
app.use(expressSanitizer());

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//View Engine
app.set('view engine', 'ejs');

// Root Route
app.get('/', (req, res) => {
  res.render('index');
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

//Our Work Route
app.get('/our-work', (req, res) => {
  res.render('our-work');
});

//Blog Page Route
app.get('/blog', (req, res) => {
  res.render('blog');
});

//Contact Page
app.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

//Use Required Routes
app.use(indexRoutes);

//Listen on port 8080
app.listen(8080, function() {
  console.log("App Running");
});
