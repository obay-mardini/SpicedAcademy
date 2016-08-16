var fs = require('fs');
baseDir = './';
//x = '';
  function readFile(path) {
    fs.readdir(path, function(err, files){
      console.log(path + '  contains ' + files);
      files.forEach(function(item){
        fs.stat(path + '/'+ item, function(err, stats){
          if(err){
            console.log(err);
            process.exit();
          }
          if (stats.isDirectory()) {
            readFile(path + '/' + item)
          }
        });
      });
    })
  }
readFile(__dirname);
