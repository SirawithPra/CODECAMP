const http = require('http');
const fs = require('fs');
const port = 8000;
const formBody = require("body/form")

let postHTML =fs.readFileSync('./formpost.html');

http.createServer((req, res)=>{
    if(req.url === '/')
        return res.end(postHTML);
    formBody(req, res, function (err, body) {
        if (err) {
            res.statusCode = 500
            return res.end("Have Error with body")
        }
        console.log(body.fname + ' ' + body.lname);
        res.writeHead(200)
        res.write(`<p>ชื่อ : ${body.fname}</p>`)
        res.write(`<p>นามสกุล : ${body.lname}</p><hr>`)
        res.end(postHTML);
    })

}).listen(port,()=>console.log('Server start...'));