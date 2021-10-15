const fs = require('fs')      //fs is a file system


// fs.readFile('./test.txt','utf8',(error,data) => {
//     if(error) console.log(error)
//     else console.log(data.toString())
// })

// console.log(fs.readFileSync('./test.txt','utf-8'))

// console.log(`I'm a random log`)


// 2
// fs.writeFile('./test.txt','Hi',(error) => {
//     if(error) console.log(error)
    
// })


// 3
fs.writeFile('./test.txt',`Append me ${fs.readFileSync('./test.txt','utf8')}`,(error) => {
        if(error) console.log(error)
})




