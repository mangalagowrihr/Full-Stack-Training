const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send('dadada')
})




app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})