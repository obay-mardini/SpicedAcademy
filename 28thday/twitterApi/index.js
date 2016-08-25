var search = require('./httpModule');
var express = require('express');
var fs = require('fs')
var app = express();
var staticProjects = express.static(__dirname + '/projects');


app.use(staticProjects);
app.get('/twitter', function(req, res){
  search.search('theonion', function(data) {
    var twittsArray = [];
    data.forEach(function(twit){
      var twittsObject = {};
      twit = twit.text.split('http');
      console.log(twit)
      twittsObject['url'] = 'http' + twit[1];
      twittsObject['title'] = twit[0];
      twittsArray.push(twittsObject);
    })
    res.write(JSON.stringify(twittsArray));
    res.end();
  });
});
app.listen(8080);
