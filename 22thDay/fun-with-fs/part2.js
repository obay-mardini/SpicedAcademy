var fs = require('fs');
var myObj = {};
function first(path){
  addSync(path, myObj);
  function addSync(path,obj) {
    var temp = {}

    //console.log(path)
    fs.readdirSync(path).forEach(function(file) {
      console.log(file)
      if(fs.statSync(path + '/' + file).isDirectory()) {
          obj[file] = obj[file] || {};
          obj[file] = addSync(path + '/' + file, obj[file]);
      } else {
        obj[file] = fs.statSync(path).size;
      }
    })
    return obj;

  }
  fs.writeFile('dataTree.json', JSON.stringify(myObj.files, null, 4), function() {
    console.log('saved')
  });
}


first(__dirname);
