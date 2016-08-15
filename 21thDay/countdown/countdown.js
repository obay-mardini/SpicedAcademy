var whatEver = require('events');
function Countdown(num) {
  this.num = num;
  var instance = this;
  setTimeout(function countDown() {

    if(num  === 1){
      return instance.emit('done')
    } else {
      num--;
      instance.emit('HELLO',num);
      setTimeout(countDown,1000);
    }
  },1000)

}

Countdown.prototype = whatEver.EventEmitter.prototype;
module.exports.Countdown = Countdown;
