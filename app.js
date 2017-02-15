const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(__dirname + '/static'));

//View Engine
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});

app.listen(8080, function() {
  console.log("App Running");
});
