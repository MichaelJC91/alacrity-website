const express = require('express');
const router = express.Router();

// About Route
router.get('/about', (req, res) => {
  res.render('about');
});

//Our Work Route
router.get('/our-work', (req, res) => {
  res.render('our-work');
});

//Blog Page Route
router.get('/blog', (req, res) => {
  res.render('blog');
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

module.exports = router;
