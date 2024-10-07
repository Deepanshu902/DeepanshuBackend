require('dotenv').config()
const express = require('express')
const app = express() // most powerfull
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/youtube',(req,res)=>{
    res.send("Youtube")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at deepanshu website</h1>')
})

app.listen(process.env.port,()=>{
    console.log(`example app listing to port ${port}`);
    
})
