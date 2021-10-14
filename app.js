const path = require('path')

// console.log(path)

console.log(path.resolve('./app.js'))      //path.resolve converts to absolute path i,e root of a machine

console.log(path.relative('/',"./temp/utils.js"))    //path.relative converts to relative path


console.log(path.extname('./app.js'))    //it will give an extension name of a path


console.log(path.dirname('./temp/utils.js'))    //gives the directory name i,e parent


console.log(__dirname)    //gives the current directory name


console.log(path.join(__dirname,'app.js'))     //it is similar to path.resolve