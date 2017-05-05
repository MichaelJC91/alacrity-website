const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const compression = require('compression');
const apicache = require('apicache');
const enforce = require('express-sslify');

//Required Routes
const indexRoutes = require('./routes/indexRoutes/index');
const portfolioRoutes = require('./routes/portfolioRoutes/portfolio');
const contactRoute = require('./routes/contact/contact');

//SSL Redirect
app.use(enforce.HTTPS());

//Cache Middleware
const cache = apicache.middleware;

if(process.env.NODE_ENV === "production") {
  app.use(cache('1 day'));
  // Caches css, js, imgs, and fonts
  app.use(function (req, res, next) {
      if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
          res.setHeader('Cache-Control', 'public, max-age=3600');
      }
      next();
  });
}

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

//Use Required Routes
app.use(indexRoutes);
app.use(contactRoute);
app.use('/our-work', portfolioRoutes);

//404 Page
app.get('*', (req,res) => {
  res.render("404");
});

//Listen on port 8080
app.listen(port, function() {
  console.log("App Running");
});
