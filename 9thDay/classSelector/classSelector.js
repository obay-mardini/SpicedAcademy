function getElementsByClass(className) {
    var element = document.documentElement;
    var myArray = [];
    findClass(element);

    function hasClass(elem) {
        /* with classLIst
        return elem.classList.contains(className);
        */
        ///without using classList

        if(typeof elem.className === 'string') {
            if (elem.className.split(' ').indexOf(className) > -1) {
              return true;
            } else {
            return false;
            }
        } else if (elem.className.baseVal.split(' ').indexOf(className) > -1) {
           return true;
            }
            return false;


    }

    function findClass(element) {
        if (hasClass(element)) {
            myArray.push(element);
        }

        for (var i = 0; i < element.children.length; i++) {
            findClass(element.children[i]);
        }
    }

    return myArray;
}
