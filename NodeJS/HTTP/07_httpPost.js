const http = require('http');
const fs = require('fs');
const port = 8000;

let postHTML =fs.readFileSync('./formpost.html');

http.createServer((req, res)=>{
    let body = ''
    req.on('data',(chunk)=>{
        body += chunk;
    });
    req.on('end',()=>{
        body = decodeURI(body);
        console.log('Body : ' + body);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`<h1>${body}</h1>`);
        res.end(postHTML);
    });
}).listen(port,()=>console.log('Server start...'));