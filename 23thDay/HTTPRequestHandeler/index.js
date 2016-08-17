var http = require('http');
var myFirstServer = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var body = [];
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'bacon');
  console.log('heelo')
  request.on('error', function(err){
    console.log(err);
  }).on('data', function(chunk) {
    body.push(chunk)
    //console.log(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    console.log('boddy' + body);
    response.statusCode = 200;
    var responseBody = {
      headers: headers,
      method: method,
      body: body,
      url: url
    };
    response.end(JSON.stringify(responseBody));
  });
  response.on('error', function(err) {
    console.log('error in the response ' + err);
  })

}).listen(8080)
