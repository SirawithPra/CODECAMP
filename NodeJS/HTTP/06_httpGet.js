const http = require('http');
const url = require('url');
const port = 8000;
const fs = require('fs');

function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.write(data);
        res.end();
    });
}
http.createServer((req, res) => {
    let p_url = url.parse(req.url,true)
    // console.log(p_url)
    // console.log(p_url.query)
    // console.log(p_url.pathname)
    if (req.url === '/') 
        return renderHTML('./index.html', req, res);

    if (req.url === '/form') 
        return renderHTML('./formget.html', req, res);

    if (p_url.pathname === '/getdata') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.write('<p>We got data</p>')
        res.write(`<p>Your data ${req.url}</p>`);
        res.write(`<p>ชื่อ : ${p_url.query.fname}</p>`);
        res.write(`<p>นามสกุล : ${p_url.query.lname}</p>`);
        return res.end();
    }
    //console.log(req.url);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`<h1>404 Not Found ${req.url}</h1>`);
    res.end();
}).listen(port, () => console.log('Server start...'));