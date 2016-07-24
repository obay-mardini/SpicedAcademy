function invertCase(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === str[i]) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }

    return newStr;
}
