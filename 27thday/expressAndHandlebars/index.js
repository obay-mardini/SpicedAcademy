var express = require('express');
var hb = require('express-handlebars');
var app = express();
var staticProjects = express.static(__dirname + '/projects');

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
app.listen(8080);
