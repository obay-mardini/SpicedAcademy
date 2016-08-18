var http = require('http');
var server = http.createServer(handleResponse).listen(8080);
function handleResponse(request, response){
  var method = request.method;
  var url = request.url;
  var header = request.headers;
  var acceptedMethods = ['GET', 'PUT', 'POST', 'HEAD'];
  var body = '';

  if(acceptedMethods.indexOf(method) === -1 ){
    response.end();
  }
  console.log(method, url, header);

  if(method === acceptedMethods[0] || method === acceptedMethods[3]){
    response.writeHead('200', {'content-type': 'text/html'});
  }
  if(method === 'HEAD') {
    response.end();
  }
  response.on('error', handleEror);
  request.on('error', handleEror);
  request.on('data', function (chunk){
    body += chunk;
  });

}

function handleEror(err){
  console.log(err);
  this.end();
}
