var fs = require('fs');
var myObj = {};
function first(path){
  addSync(path, myObj);
  function addSync(path,obj) {
    var temp = {}

    //console.log(path)
    fs.readdirSync(path).forEach(function(file) {
      if(file[0] === '.'){
        return;
      }
      if(fs.statSync(path + '/' + file).isDirectory()) {
          obj[file] = obj[file] || {};
          obj[file] = addSync(path + '/' + file, obj[file]);
      } else {
        console.log(fs.statSync(path).size)
        obj[file] = fs.statSync(path + '/' + file).size;
      }
    })
    return obj;

  }
  fs.writeFile('dataTree.json', JSON.stringify(myObj, null, 4), function() {
    console.log(myObj)
  });
}


first(__dirname);
