const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('Hello!');
});

app.listen(8080, function() {
  console.log("App Running");
});
