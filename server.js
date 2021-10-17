const express = require('express')
const app = express()

app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')

app.get('/products/:categories',(req,res) => {
    if(req.params.categories=='iPhone'){}
    if(req.params.categories=='Mac'){}
    if(req.params.categories=='Ipad'){}
    if(req.params.categories=='Music'){}
    console.log(req.params)
    res.send('PING')
})

app.listen(3001,() => {
    console.log("Listening at PORT 3001")
})