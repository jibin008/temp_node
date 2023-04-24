const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
    res.end("this is our first program")
    }
    if(req.url=='/about'){
        res.end(" is our second program")
        }
    res.end(`<h1>oops> `)
})
server.listen(5000)