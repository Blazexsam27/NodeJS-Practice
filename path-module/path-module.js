const path = require('path');

console.log(path.dirname("/home/blazexsam/Node.js Practice/path-module/path-module.js")) //shows the working directory name
console.log(path.basename("/home/blazexsam/Node.js Practice/path-module/path-module.js")) // shows the filename
console.log(path.extname("/home/blazexsam/Node.js Practice/path-module/path-module.js")) // shows extension name
console.log(path.parse("/home/blazexsam/Node.js Practice/path-module/path-module.js")) // shows dir, basename, extension, filename