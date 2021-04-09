require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {validationResult} = require('express-validator')
const registerValidator = require('./validators/RegisterValidator')
const ProductRouter = require('./routers/ProductRouter')
const OrderRouter = require('./routers/OrderRouter')
const AccountRouter = require('./routers/AccountRouter')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        code: 0,
        message: 'REST API'
    })
})

app.use('/products',ProductRouter)
app.use('/orders',OrderRouter)
app.use('/account',AccountRouter)

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`http://localhost:` + port )
})