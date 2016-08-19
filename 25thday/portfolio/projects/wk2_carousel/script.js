(function() {
  var kitties = document.getElementsByClassName('kitty');
  var classes = ['onRight', 'onScreen', 'onLeft'];
  var dotsArray = [].slice.call(document.getElementsByClassName('dot'));
  var currentIndex = 0;
  var timer;
  var isTransitioning;

  for ( var i = 0; i < dotsArray.length; i++){
    dotsArray[i].addEventListener('click', function () {
      if (isTransitioning || this.classList.contains('currentDot')) {
        console.log(this.classList.contains('currentDot'));
        return;
      }
      console.log(dotsArray.indexOf(this))
      clearTimeout(timer);
      //setDot(dotsArray.indexOf(this));
      switchImagestate(dotsArray.indexOf(this));

    })
  }

  function switchImagestate(currentIndex) {
    var classesMap = {
      onScreen: "onLeft",
      onRight: "onScreen",
      onLeft: "onRight",
    };

    var indexs = {
      0: 2,
      1: 0,
      2: 1
    };

    var curClass = '';
    var currentKitty;
    if (arguments.length !== 1){
      for (var i = 0; i < kitties.length; i++) {
        curClass = kitties[i].classList[1];
        kitties[i].classList.remove(curClass);
        kitties[i].classList.add(classesMap[curClass]);
        if (classesMap[curClass] === 'onScreen') {
          currentKitty = kitties[i];
          currentIndex = i;
        }
      }
      setDot(currentIndex);
    } else {
      var count = 0;
      setDot(currentIndex);
      currentKitty = kitties[currentIndex];
      currentKitty.classList.remove(currentKitty.classList[1]);
      currentKitty.classList.add('onScreen');
      var preClass = 'onScreen';
      for(var i = indexs[currentIndex]; count < 2; count++) {
        kitties[i].classList.remove(kitties[i].classList[1]);
        kitties[i].classList.add(classesMap[[preClass]]);
        preClass = classesMap[[preClass]];
        i = indexs[i];
      }
    }
      currentKitty.addEventListener('transitionend', function tranisionEnd() {
        timer = setTimeout(switchImagestate, 1500);

        currentKitty.removeEventListener('transitionend', tranisionEnd);
        isTransitioning = false;
      });
    }

    function setDot(n) {
      for (var i = 0; i < dotsArray.length; i++) {
        dotsArray[i].classList.remove('currentDot');
      }
      dotsArray[n].classList.add('currentDot');
      isTransitioning = true;
    }

    setTimeout(switchImagestate, 1000)
})();
