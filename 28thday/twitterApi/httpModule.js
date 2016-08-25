var https = require('https');
var base64 = Buffer(require('./password.json').password).toString('base64');
//var base64 = Buffer(fs.readFileSync('./password.txt')).toString('base64');
var myTweets = 'something';

function getTokens(cb) {
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
      Authorization: 'Basic ' + base64// Bearer
    }
  };

  callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {

      JSON.parse(str).access_token;
      return cb(null, JSON.parse(str).access_token);
    });
  }

  var req = https.request(options, callback);

  //This is the data we are posting, it needs to be a string or a buffer
  req.write('grant_type=client_credentials');
  req.end();
}

function search(target, cb2){
  return getTokens(function(err, data) {
    var options = {
      host: 'api.twitter.com',
      path: '/1.1/statuses/user_timeline.json?screen_name=' + target + '&count=20',
      //since we are listening on a cus
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data
      }
    };

    callback = function(response) {
      var str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });

      response.on('end', function () {
        cb2(JSON.parse(str));
      });
    }

    var req = https.request(options, callback);
    req.end();

  });
}

exports.search = search
