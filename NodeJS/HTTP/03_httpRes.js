const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html', //text/plain is mean plain text
        'Code-Camp':18});
    res.write('this is response message\n');
    res.write('from your local server');
    res.write('<h2>test</h2>');
    res.end('<H2> Good bye!</H2>');
}).listen(8000,()=>{
    console.log('server start...')});