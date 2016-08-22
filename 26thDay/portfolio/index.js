/*
var http = require('http');
var config = require('./config.json')
var fs = require('fs');
var handlebars = require('handlebars');
var myTemplate = handlebars.compile(fs.readFileSync('./projects.hbs').toString());
handlebars.templates = {myTemplate: myTemplate}

var obj = [];
function constructFileMap(path) {

  console.log(fs.readdirSync(path))

  fs.readdirSync(path).forEach(function(file){
    var tempObj = {};
    tempObj['Name'] = file;
    tempObj['link'] = './projects/' + file + '/';
    obj.push(tempObj)
  });

  webContent = handlebars.templates.myTemplate(obj);
  console.log( webContent)
  //fs.writeFile('config.json', JSON.stringify(obj, null, 4));
}

constructFileMap(__dirname + '/projects');
var myFirstServer = http.createServer(onRequest).listen(8080);
function onRequest(request, response) {
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var body = [];
  var urlArr = url.split('/');
  request.on('error', function(err){
    console.log(err);
  });
  response.on('error', function(err) {
    console.log('error in the response ' + err);
  });
  if(method !== 'GET') {
    response.statusCode = 403;
    response.end();
  }
  if(urlArr[3] === '') {
    var indexHtmlStream = fs.createReadStream(config[urlArr[2]] + 'index.html');
    indexHtmlStream.on('error', function() {
      console.log('error in indexHtmlStream')
    });
    indexHtmlStream.pipe(response);
  }
  if(urlArr.length === 3){
    console.log(url);
    response.writeHead(303, {
      'location': config[urlArr[2]].slice(1)
    })
    response.end()
  }
  if(url === '/'){
    response.setHeader('Content-Type', 'text/html')
          response.write(webContent);
      response.end()
  }
  if(urlArr[urlArr.length - 1] === 'stylesheet.css') {
    console.log('.' + url)
    fs.createReadStream('.' + url).pipe(response)
  }

  if(urlArr[urlArr.length - 1].split('.')[1] === 'jpg'){
    fs.createReadStream('.' + url).pipe(response)
  }
  if(urlArr[urlArr.length - 1] === 'script.js') {
    response.writeHead('200', {
      'Content-Type': 'text/javascript'
    });
    fs.createReadStream('.' + url).pipe(response)
  }

  //fs.createReadStream('.' + url).pipe(response)
}

*/
var express = require('express');
var app = express();

var staticProjects = express.static(__dirname + '/projects');
app.use(staticProjects);
app.get(function(req, res, next){
  console.log(res);
})
app.listen(8080)
