(function() {
  var myElement = document.getElementById('myElement');
  myElement.addEventListener('mouseup', function() {
    this.style.backgroundColor = 'rgb(' + randomnessFactory() + ')';

  });
  myElement.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#' + randomHex();
  });

  function randomnessFactory() {
    return Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256);
  }

  function randomHex() {
    return Math.floor(Math.random() * 256).toString(16) + '' + Math.floor(Math.random() * 256).toString(16) +
     '' + Math.floor(Math.random() * 256).toString(16)
  }
})();
