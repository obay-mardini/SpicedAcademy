var http = require('http');
var myFirstServer = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var body = [];
  console.log('heelo')
  request.on('error', function(err){
    console.log(err);
  }).on('data', function(chunk) {
    console.log(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    console.log(body);
  });

}).listen(8080)
