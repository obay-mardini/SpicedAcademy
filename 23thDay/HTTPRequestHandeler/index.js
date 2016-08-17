var http = require('http');
var myFirstServer = http.createServer(function(request, response) {

  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var body = [];
  console.log('method  ' + method + ' url ' + url + '   headers' + headers);
  request.on('error', function(err){
    console.log(err);
  });
  response.on('error', function(err) {
    console.log('error in the response ' + err);
  });
  if(method !== 'GET' && method !== 'HEAD' && method !== 'PUT' && method !== 'POST') {
    response.statusCode = 403;
    response.end();
  }
  if(method === 'GET' || method === 'HEAD') {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
  }

  if(method === 'HEAD') {
    response.end();
  }else {

    request.on('data', function(chunk) {
      body.push(chunk)
      //console.log(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
      if(method === 'PUT' || method === 'POST') {
        console.log(body);
        response.setHeader('location', '/');
        response.statusCode = 303;
        response.end();
      } else {
        response.statusCode = 200;
        if(method === 'GET') {
          response.end('<!doctype html><html><title>Hello World!</title></html>');
        } else {
            response.end('there is no body');
        }
      }
    });
    response.on('error', function(err) {
      console.log('error in the response ' + err);
    });
  }
}).listen(8080)
