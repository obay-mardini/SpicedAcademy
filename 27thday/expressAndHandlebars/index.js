var express = require('express');
var hb = require('express-handlebars');
var app = express();
var staticProjects = express.static(__dirname + '/projects');
/*
app.engine('handlebars', hb({defauleLayout: 'main'}));

app.set('view engine', 'handlebars');
app.get('/', function(req, res){
  res.render('home');
});
*/
app.use(staticProjects);
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
app.get('/dono',function(req,res){
  res.render('hello',
      {obj:[{link:'/hangman', name: 'hangman'},{link:'/ticker', name: 'ticker'},{link:'/spotifySelector', name: 'Spotify Selector'},{link:'/wk2_carousel', name: 'wk2_carousel'}]}
  );
});
app.listen(8080);
