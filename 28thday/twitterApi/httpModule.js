var https = require('https');
var base64 = Buffer('6WCtySaQpBcENc4vOHaNXM5lz:9gaFfVWo0rCDXUXuJZHpmea7EF5JlqGKPlF0MFdYdr7B7NmiJX').toString('base64');
console.log(base64)
//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'api.twitter.com',
  path: '/oauth2/token',
  //since we are listening on a custom port, we need to specify it by hand
  port: '443',
  //This is what changes the request to a POST request
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    Authorization: 'Basic ' + base64
  }
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

var req = https.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write('grant_type=client_credentials');
req.end();
