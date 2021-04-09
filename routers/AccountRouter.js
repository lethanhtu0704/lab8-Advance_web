const express = require('express')
const { validationResult } = require('express-validator')
const RegisterValidator = require('../validators/RegisterValidator')
const bcrypt = require('bcrypt')
const Router = express.Router()
const Account = require('../models/AccountModel')

Router.get('/',(req,res)=>{
    res.json({
        code: 0,
        message: 'Account route'
    })
})

Router.get('/login',(req,res)=>{
    res.json({
        code: 0,
        message: 'Login route'
    })
})

Router.post('/register',RegisterValidator ,(req,res)=>{
   let result = validationResult(req)
   if( result.errors.length === 0){

    let {email,password,fullname} = req.body
    bcrypt.hash(password,10)
    .then(hashed =>{
        let user = new Account(
            {
                email : email,
                password : hashed,
                fullname : fullname
            }
        )
        return user.save().then(()=>{
            return res.json({code:0, message:'Đăng kí thành công ' , data:user})
        }).catch(e =>{
            return res.json({code:2, message:'Đăng kí thất bại' + e.message})
        }) 
    })
   }else{
    let messages = result.mapped()
    let message = ''
    for ( m in messages){
        message = messages[m]
        break
    }
    return res.json({code:0, message:message})
   }

   
})

module.exports = Router