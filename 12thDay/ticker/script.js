(function() {
  var ticker = document.getElementById('ticker');
  var n = 0;
  window.requestAnimationFrame(function anim() {
    n += 4;
      if (n % 3 === 0) {
          ticker.style.transform = 'translateX(' + -n + 'px)';
      } else if (n > ticker.children[0].offsetWidth) {
          n -= ticker.children[0].offsetWidth;
          ticker.appendChild(ticker.children[0]);
          ticker.style.transform = 'translateX(' + -n + 'px)';
       }
      return window.requestAnimationFrame(anim);
  });

})();
