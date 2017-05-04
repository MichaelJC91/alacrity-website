const express = require('express');
const router = express.Router();

// Portfolio routes

// Portfolio Works
router.get('/asktheo', (req, res) => {
  res.render('./portfolio/asktheo');
});

router.get('/tegan-steele', (req, res) => {
  res.render('./portfolio/tegan-steele');
});

router.get('/glenlyon-dental', (req, res) => {
  res.render('./portfolio/glenlyon-dental');
});

router.get('/hollander-fitness', (req, res) => {
  res.render('./portfolio/hollander-fitness');
});

router.get('/barefoot-blender', (req, res) => {
  res.render('./portfolio/barefoot-blender');
});

router.get('/seeds-of-life', (req, res) => {
  res.render('./portfolio/seeds-of-life');
});

module.exports = router;
