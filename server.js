const express = require('express')
const app = express()
const PORT = 3000

const Logger = (req,res,next) =>{
    console.log(req.method)
    next()
}

app.use(express.json())

app.get('/',(req,res) =>{
    res.send('Server running')
})


app.post('/',(req,res) =>{
    console.log(req.body)
    res.send('Server running')
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${3000}`)
})