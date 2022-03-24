const http = require('http')
const {URLSearchParams} = require('url')
const app = http.createServer()
app.on('request',(req,res)=>{
    let query = new URLSearchParams(req.url.split('?')[1])
    let funcName = query.get('callback')
    // JSONP返回设置
    res.writeHead('200',{'Content-Type':'text/javascript'})
    res.write(funcName+'({name:"chaos",age:14})')
    res.end()
})
app.listen(99)