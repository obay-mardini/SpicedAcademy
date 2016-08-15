var events = require('./countdown.js');
var myEmitter = new events.Countdown(10);

myEmitter.on('HELLO', function HELLO(num) {
  console.log(num + '!');
});
myEmitter.on('done', function() {
  console.log('done')
})
