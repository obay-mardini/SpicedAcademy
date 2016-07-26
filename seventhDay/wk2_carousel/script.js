(function() {
  var kitties = document.getElementsByClassName('kitty');
  var classes = ['onRight', 'onScreen', 'onLeft'];

  function switchImagestate() {
    //first way
    /*
    if (kitties[0].classList[1] === 'onScreen') {
      kitties[0].classList.remove('onScreen');
      kitties[0].classList.add('onLeft');
      kitties[1].classList.remove('onRight');
      kitties[1].classList.add('onScreen');
      kitties[2].classList.remove('onLeft');
      kitties[2].classList.add('onRight');
      console.log(kitties[0].classList, kitties[1].classList, kitties[2].classList)
    } else if (kitties[0].classList[1] === 'onLeft'){
      kitties[0].classList.remove('onLeft');
      kitties[0].classList.add('onRight');
      kitties[1].classList.remove('onScreen');
      kitties[1].classList.add('onLeft');
      kitties[2].classList.remove('onRight');
      kitties[2].classList.add('onScreen');
    } else {
      kitties[0].classList.remove('onRight');
      kitties[0].classList.add('onScreen');
      kitties[1].classList.remove('onLeft');
      kitties[1].classList.add('onRight');
      kitties[2].classList.remove('onScreen');
      kitties[2].classList.add('onLeft');
    }
    */
  //  return setTimeout(switchImagestate, 6000);
/*
    var i = classes.indexOf(kitties[0].classList.[1]);
      kitties[0].classList.remove(classes[i]);
      kitties[0].classList.add(classes[i + 1]);
      kitties[1].classList.remove(classes[i + 1]);
      kitties[1].classList.add(classes[i + 2]);
      kitties[2].classList.remove(classes[i + 2]);
      kitties[2].classList.add(classes[i]);
*/

  // third way
  var classesMap = {
    onScreen: "onLeft",
    onRight: "onScreen",
    onLeft: "onRight",
  }

  var curClass = ''
  for (var i = 0; i < kitties.length; i++){
    curClass = kitties[i].classList[1];
    kitties[i].classList.remove(curClass);
    kitties[i].classList.add(classesMap[curClass]);
  }

    return setTimeout(switchImagestate, 6000);
  }
  /*
  // second way

  function switchImagestate() {
    var currentClass = classes.indexOf(kitties[0].classList[1]);
    var next = currentClass + 1;
    var dbNext = currentClass + 2;
    if (currentClass === 1) {
      next = currentClass + 1;
      dbNext = 0;
    } else if (currentClass === 2) {
      next = 0;
      dbNext = 1;
    }

    kitties[0].classList.remove(classes[currentClass]);
    kitties[0].classList.add(classes[next]);
    kitties[1].classList.remove(classes[next]);
    kitties[1].classList.add(classes[dbNext]);
    kitties[2].classList.remove(classes[dbNext]);
    kitties[2].classList.add(classes[currentClass]);

    return setTimeout(switchImagestate, 5000);
  }
  */


  setTimeout(switchImagestate, 6000);
})();
