const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const compression = require('compression');
const apicache = require('apicache');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

//Port
const port = process.env.PORT || 3000;

//Required Routes
const indexRoutes = require('./routes/indexRoutes/index');
const portfolioRoutes = require('./routes/portfolioRoutes/portfolio');
const contactRoute = require('./routes/contact/contact');
const user = require('./routes/users/user');

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

//Load ENV Variables
dotenv.load();

// This will configure Passport to use Auth0
const strategy = new Auth0Strategy({
    domain:       process.env.AUTH0_DOMAIN,
    clientID:     process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});

passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(cookieParser());
app.use(session({
  secret: 'shhhhhhhhh',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Gzip Compress
app.use(compression());

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


//SSl Redirect
/* Redirect http to https */
app.get('*',function(req, res, next) {
  if(req.headers['x-forwarded-proto']!='https'&&process.env.NODE_ENV === 'production') {
    res.redirect('https://'+req.hostname+req.url);
  }
  else {
    next() /* Continue to other routes if we're not redirecting */
  }
});

// Root Route
app.get('/', (req, res) => {
  res.render('index');
});

//Use Required Routes
app.use(indexRoutes);
app.use(contactRoute);
app.use('/user', user);
app.use('/our-work', portfolioRoutes);

//404 Page
app.get('*', (req,res) => {
  res.render("404");
});

//Listen on port 8080
app.listen(port, function() {
  console.log("App Running");
});
