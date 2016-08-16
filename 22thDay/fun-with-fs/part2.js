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
  console.log(JSON.stringify(myObj.files));
}


first(__dirname);
