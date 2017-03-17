const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const compression = require('compression');
const apicache = require('apicache');

//Required Routes
const indexRoutes = require('./routes/contact/contact');

//Cache Middleware
const cache = apicache.middleware;

// if(process.env.NODE_ENV === "production") {
//   app.use(cache('1 day'));
//   // Caches css, js, imgs, and fonts
//   app.use(function (req, res, next) {
//       if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
//           res.setHeader('Cache-Control', 'public, max-age=3600');
//       }
//       next();
//   });
// }

//Gzip Compress
app.use(compression());

//Port
const port = process.env.PORT || 8080;

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

// Legal Document pages
// Privacy Policy Route
app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

// Terms & Conditions
app.get('/terms-and-conditions', (req, res) => {
  res.render('terms-and-conditions');
});

// Website Disclaimer
app.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});

// Portfolio Works
app.get('/our-work/asktheo', (req, res) => {
  res.render('./portfolio/asktheo');
});

app.get('/our-work/tegan-steele', (req, res) => {
  res.render('./portfolio/tegan-steele');
});

app.get('/our-work/glenlyon-dental', (req, res) => {
  res.render('./portfolio/glenlyon-dental');
});

app.get('/our-work/hollander-fitness', (req, res) => {
  res.render('./portfolio/hollander-fitness');
});

app.get('/our-work/barefoot-blender', (req, res) => {
  res.render('./portfolio/barefoot-blender');
});

//Use Required Routes
app.use(indexRoutes);

//Listen on port 8080
app.listen(port, function() {
  console.log("App Running");
});
