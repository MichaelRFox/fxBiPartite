//requires terser v 5.0.0 or higher

var Terser = require('terser');
var fs = require('fs');
var path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  
  var files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    };
  });

  return arrayOfFiles.filter(path => path.match(/\.js$/));
}

function minifyFiles(filePaths) {
    var options = {
                    mangle: false, 
                    compress: {defaults: false, drop_console: true}, 
                    module: true, 
                    output: {beautify: true, quote_style: 1, ecma: 2015, wrap_func_args: false}};
    
    filePaths.forEach(function(filePath) {
        var code = fs.readFileSync(filePath, 'utf8');
        Terser.minify(code, options).then(result => {
          fs.writeFileSync(filePath, result.code);
        }).catch(error => {
            console.log('Error minifying ' + filePath + ' \nTerser returned: ' + error);
        });
  });
}

const files = getAllFiles('./src');
minifyFiles(files);