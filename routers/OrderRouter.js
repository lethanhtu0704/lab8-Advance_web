const express = require('express')
const Router = express.Router()

Router.get('/',(req,res)=>{
    res.json({
        code: 0,
        message: 'Order route'
    })
})

Router.get('/add',(req,res)=>{
    res.json({
        code: 0,
        message: 'Add product'
    })
})

module.exports = Router