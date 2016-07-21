function printTheValues(value, key) {
  console.log('The value of ' + key + ' is ' + value);
}

function each(item, callback) {
  if ( Array.isArray(item)) {
    for (var i = 0; i < item.length; i++) {
      callback(item[i], i);
    }
  }else if (typeof item === 'object') {
    for ( var properity in item) {
      callback(item[properity], properity);
    }
  }

}
