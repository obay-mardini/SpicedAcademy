(function() {
    var sideList = document.getElementById('sideList');
    var hamburger = document.getElementById('right');
    var bigX = document.getElementById('bigX');

    hamburger.addEventListener('click', function() {
      sideList.style.transform = 'translateX(-300px)';
      sideList.style.transitionDuration = '1s';
      document.body.style.overflow = 'hidden'
    });
    bigX.addEventListener('click', function() {
      sideList.style.transform = 'translateX(300px)';
      sideList.style.transitionDuration = '0s';
      document.body.style.overflow = 'visible'
    });

})();
