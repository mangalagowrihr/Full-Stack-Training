const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');


router.get('/all', (req, res) => {

    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

/*
ROUTE:http://localhost:3001/category/add
METHOD:POST
*/

router.post('/add',(req,res)=>{
    const {name} =req.body
    const newCategory = {
        id:uuidv4(),
        name
    }
  
    // database.categories.push(newCategory)
    //if(){}
   
   
  
    try {
        let includes = database.categories.find(item=>item.name===name)
        if(!includes) database.categories.push(newCategory)
        
        else console.log('Already  exists')
        
        res.json({
            categories: database.categories,
            message: "Successfully added categories",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports = router