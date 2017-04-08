'use strict';

const express = require('express');

var app = express();

let options = {
	root: __dirname
};

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.solarsmartbuy.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
	res.sendFile('dist/index/html', options);
});

app.get('/example1', function(req, res){
	res.status(200).send('Hello there!');
});

app.listen(8082);
