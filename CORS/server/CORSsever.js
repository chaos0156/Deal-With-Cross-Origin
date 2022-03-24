const express = require('express')

//CORS
const app = express()
app.get('/',(req,res)=>{
    console.log(req.referer)
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    res.send({name:'chaos',age:14})
})
app.listen(91)