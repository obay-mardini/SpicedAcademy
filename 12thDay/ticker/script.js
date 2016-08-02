(function() {
  var ticker = document.getElementById('ticker');
  var n = 0;
  var myAnimationFrame;

  ticker.addEventListener('mouseenter', function() {
      window.cancelAnimationFrame(myAnimationFrame);
  });
  ticker.addEventListener('mouseleave', function() {
      myAnimationFrame = window.requestAnimationFrame(anim)
  });

    myAnimationFrame = window.requestAnimationFrame(anim);

    function anim() {
      n += 4;
      if (n % 3 === 0) {
          ticker.style.transform = 'translateX(' + -n + 'px)';
      } else if (n > ticker.children[0].offsetWidth) {
          n -= ticker.children[0].offsetWidth;
          ticker.appendChild(ticker.children[0]);
          ticker.style.transform = 'translateX(' + -n + 'px)';
       }
       myAnimationFrame = window.requestAnimationFrame(anim);
     }

})();
