(function() {
  var ticker = document.getElementById('ticker');
  var n = 0;
  var myAnimationFrame;

  var templates = document.querySelectorAll('script[type="text/handlebars"]');
  Handlebars.templates = Handlebars.templates || {};
  Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
  });

  $.get('/callMe.js', function(response) {
      response = JSON.parse(response);
      ticker.innerHTML = Handlebars.templates.newsLinks({links:response});
      setTicker();
  });

  function setTicker() {
  ticker.addEventListener('mouseenter', function() {
      window.cancelAnimationFrame(myAnimationFrame);
  });
  ticker.addEventListener('mouseleave', function() {
      myAnimationFrame = window.requestAnimationFrame(anim)
  });

    myAnimationFrame = window.requestAnimationFrame(anim);

    function anim() {
      console.log('anim')
      n += 1;
      if (n % 3 === 0) {
          ticker.style.transform = 'translateX(' + -n + 'px)';
      } else if (n > ticker.children[0].offsetWidth) {
          n -= ticker.children[0].offsetWidth;
          ticker.appendChild(ticker.children[0]);
          ticker.style.transform = 'translateX(' + -n + 'px)';
       }
       myAnimationFrame = window.requestAnimationFrame(anim);
     }
   }
})();
