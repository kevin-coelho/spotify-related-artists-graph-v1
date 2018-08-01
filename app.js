var express = require('express');
var app = express();
require('dotenv').config();
var request = require('request');
var getRelatedArtists = require('./relatedArtists');

var client_id = process.env.SPOTIFY_CLIENT_ID;
var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/:id', function(req, res) {
  var output = getRelatedArtists(req.params.id, client_id, client_secret);
  console.log(output);
  res.send('Here are the related artists objects ' + output);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
