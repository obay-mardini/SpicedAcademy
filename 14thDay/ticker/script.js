(function() {
  var ticker = document.getElementById('ticker');
  var n = 0;
  var myAnimationFrame;

  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', '/callMe.js');
  myRequest.send();
  myRequest.addEventListener('readystatechange', function() {
    if(myRequest.readyState === XMLHttpRequest.DONE){
      response = JSON.parse(myRequest.responseText);
      console.log(response)
      for (var i = 0; i < response.length; i++) {
        console.log(response[i].title, response[i].url)
        ticker.innerHTML += "<a href="+ response[i].url +">"+ response[i].title + "</a>"
      }
      setTicker();
    }
  })

  function setTicker() {
  ticker.addEventListener('mouseenter', function() {
      window.cancelAnimationFrame(myAnimationFrame);
  });
  ticker.addEventListener('mouseleave', function() {
      myAnimationFrame = window.requestAnimationFrame(anim)
  });

    myAnimationFrame = window.requestAnimationFrame(anim);

    function anim() {
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
