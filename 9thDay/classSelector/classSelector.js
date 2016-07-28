function getElementsByClass(className) {
    var element = document.documentElement;
    var myArray = [];
    findClass(element);

    function hasClass(elem) {
        return elem.classList.contains(className);
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
getElementsByClass('clearfix');
