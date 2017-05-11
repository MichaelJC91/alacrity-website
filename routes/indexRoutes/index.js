const express = require('express');
const router = express.Router();
const passport = require('passport');
const dotenv = require('dotenv');

//Load ENV Variables
dotenv.load();

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

// About Route
router.get('/about', (req, res) => {
  res.render('about');
});

//Our Work Route
router.get('/our-work', (req, res) => {
  res.render('our-work');
});

//Contact Page
router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

// Legal Document pages

// Privacy Policy Route
router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

// Terms & Conditions
router.get('/terms-and-conditions', (req, res) => {
  res.render('terms-and-conditions');
});

// Website Disclaimer
router.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});


router.get('/login', function(req, res) {
  res.render('./user/login', { env: env });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }), function(req, res) {
  res.redirect(req.session.returnTo || '/user');
});

module.exports = router;
