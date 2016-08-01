(function() {
  var ticker = document.getElementById('ticker');
  var n = 0;

  window.requestAnimationFrame(function anim() {
    n+= 1;
      if ( n < (ticker.scrollWidth - document.body.offsetWidth)) {
          ticker.style.transform = 'translateX(' + -n + 'px)';
      } else {
          n =  document.body.offsetWidth;
      }
        window.requestAnimationFrame(anim);
  });

})();
