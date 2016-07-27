(function() {
  var outerBox = document.getElementById('outer');
  var innerBox = document.getElementById('inner');
  outerBox.addEventListener('click', function() {
    this.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
  });

  inner.addEventListener('click', function(event) {

    this.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
    event.stopPropagation()

  });

  function randomColor() {
    return Math.floor(Math.random() * 256);
  }
})();
