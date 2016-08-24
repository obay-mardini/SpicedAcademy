var express = require('express');
var hb = require('express-handlebars');
var app = express();
var staticProjects = express.static(__dirname + '/projects');
var http = require('http');

app.use(staticProjects);
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
app.get('/', function(req, res){
  //the body
  res.render('body',{
    layout: 'main',
    myList: [{link:'/hangman/description', name: 'hangman'},{link:'/ticker', name: 'ticker'},{link:'/spotifySelector', name: 'Spotify Selector'},{link:'/wk2_carousel', name: 'wk2_carousel'}]
  })
})
app.get('/:project/description', function(req,res){
    res.render('description',{
      layout: 'main',
      details: {name: req.params.project, description: req.params.project + ' is super fun', link: '/' + req.params.project}
    });
});


var options = {
  host: 'www.nodejitsu.com',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '1337',
  //This is what changes the request to a POST request
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();
app.listen(8080);
